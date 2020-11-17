/**
 * Convert row texts into texts with <a> tag link.
 * @param {string} str Some texts like post content, comment, and so on.
 * @return {string} Text with link
 */
const autoLink = (str) => {
  if (str === "") {
    return str;
  } else {
    const regexp_url = /((h?)(ttps?:\/\/[a-zA-Z0-9.\-_@:/~?%&;=+#',()*!]+))/g; // ']))/;
    const regexp_makeLink = (all, url, h, href) => {
      return '<a href="h' + href + '" target="_blank">' + url + "</a>";
    };
    if (regexp_url) {
      return str.replace(regexp_url, regexp_makeLink);
    } else {
      return str;
    }
  }
};

/**
 * When user select an image file from his local directory, upload it to Firebase Storage, get download URL,
 * and set the URL to the src property of img tag for displaying the thumbnail.
 * @param {string} id The identifier of input tag for uploading files
 * @param {string} fileName
 */
const attachFiles = (id, fileName = "new") => {
  let setFile = document.getElementById(id);
  setFile.addEventListener("change", (event) => {
    console.log("Start event listener.", event.target);
    const file = event.target.files;
    if (fileName === "new") {
      fileName = file[0].name;
    }
    blob = new Blob(file, { type: "image/jpeg" });
    console.log("Blob: ", blob);

    const uploadRef = imageRef.child(fileName);
    const uploadTask = uploadRef.put(blob);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log("Upload is paused");
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
        console.error("Failed to upload file. ERROR: ", error);
      },
      () => {
        // Handle successful uploads on complete
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log("File available at", downloadURL);
          document.getElementById(`${id}-thumb`).setAttribute("src", downloadURL);
        });
      }
    );
  });
};

/**
 * Calculate how long ago a comment is posted from now.
 * @param {int} updatedTime The datetime as Number like YYYYMMDDHHmmss
 * @returns {string}
 */
const calcHowLongAgo = (updatedTime) => {
  const date = formatReadableDatetime(updatedTime);
  return moment(date, "YYYY/MM/DD HH:mm:S").fromNow();
};

/**
 * Calculate what age is user's birthday (YYYY年MM月DD日)
 * @param {string} birthday
 * @return {int} age
 */
const calcWhatAge = (birthday) => {
  let formattedBirthday =
    birthday.split("年")[0] +
    ("00" + birthday.split("年")[1].split("月")[0]).slice(-2) +
    ("00" + birthday.split("月")[1].split("日")[0]).slice(-2);

  return moment().diff(formattedBirthday, "years");
};

/**
 * Remove hyphen, space, slash, and colon from the String.
 * @param datetimeString like as "YYYY/MM/DD HH:mm:ss", "YYYY-MM-DD HH:mm:ss" , or so.
 * @returns {number} formattedDatetime as YYYYMMDDHHmmss
 */
const convertDatetimeStringIntoNumber = (datetimeString) => {
  // Create pattern to match with hyphen, space, slash, and colon.
  const pattern = /[\-:\s\/]/g;

  // Delete strings match this pattern
  const formattedDatetime = datetimeString.replace(pattern, "");

  return Number(formattedDatetime);
};

/**
 * Convert Carriage Return and Line Feed into <br> tag.
 * @param {string} text The row text
 * @returns {void | string | never} The formatted text
 */
const convertCrlfToBr = (text) => {
  if (text === "") {
    return text;
  } else {
    return text.replace(/\r?\n/g, "<br>");
  }
};

/**
 * Delete a file from Firebase Storage.
 * @param {string} fileName UID of image file.
 * @return {Promise<T | boolean>}
 */
const deleteFileFromStorage = (fileName) => {
  return imageRef
    .child(fileName)
    .delete()
    .then((response) => {
      return null;
    })
    .catch((error) => {
      console.error("ファイルの削除に失敗しました。");
      return null;
    });
};

/**
 * Delete HTML element for preview of image and the file from Storage
 * @param {HTMLElement} element The preview area of uploaded image.
 * @return {boolean}
 */
const deleteUploadedFile = (element) => {
  const ret = confirm("画像を削除しますか？");

  if (!ret) {
    return false;
  } else {
    const thumbBox = element.parentElement;
    const fileName = thumbBox.getAttribute("data-value");
    deleteFileFromStorage(fileName);
    thumbBox.outerHTML = "";
    return true;
  }
};

/**
 * Convert datetime as Number into the one as String.
 * @param {int} datetimeNumber as YYYYMMDDHHmmss
 * @returns {string} "YYYY/MM/DD HH:mm:ss"
 */
const formatReadableDatetime = (datetimeNumber) => {
  const datetimeString = String(datetimeNumber);
  return (
    datetimeString.slice(0, 4) +
    "/" +
    datetimeString.slice(4, 6) +
    "/" +
    datetimeString.slice(6, 8) +
    " " +
    datetimeString.slice(8, 10) +
    ":" +
    datetimeString.slice(10, 12) +
    ":" +
    datetimeString.slice(12, 14)
  );
};

/**
 * Convert datetime as Number into the one as String for fitting the format of Flatpckr.
 * @param datetimeNumber as YYYYMMDDHHmmss
 * @returns {string} "YYYY-MM-DD HH:mm:ss"
 */
const formatFlatpckrDatetime = (datetimeNumber) => {
  const datetimeString = String(datetimeNumber);
  return (
    datetimeString.slice(0, 4) +
    "-" +
    datetimeString.slice(4, 6) +
    "-" +
    datetimeString.slice(6, 8) +
    " " +
    datetimeString.slice(8, 10) +
    ":" +
    datetimeString.slice(10, 12) +
    ":" +
    datetimeString.slice(12, 14)
  );
};

/**
 * Get the current datetime and format as Number.
 * @returns {number} datetime The datetime as Number like YYYYMMDDHHmmss
 */
const getDatetimeAsNumber = () => {
  const now = new Date();
  const year = now.getFullYear().toString();
  const month = ("00" + (now.getMonth() + 1)).slice(-2);
  const day = ("00" + now.getDate()).slice(-2);
  const hour = ("00" + now.getHours()).slice(-2);
  const minute = ("00" + now.getMinutes()).slice(-2);
  const second = ("00" + now.getSeconds()).slice(-2);
  const datetime = year + month + day + hour + minute + second;

  return Number(datetime);
};

/**
 * Verify the argument is NULL or not.
 * @param {*} checkedValue
 * @returns {*} When it is NULL, return "" as String
 */
const isNull = (checkedValue) => {
  if (checkedValue) {
    return checkedValue;
  } else {
    return "";
  }
};

/**
 * Verify the argument is NULL or not.
 * @param checkedValue
 * @returns {*} When the value is NULL, return the string to notice which the member does not exist.
 */
const isNullMember = (checkedValue) => {
  if (checkedValue) {
    return checkedValue;
  } else {
    return "このメンバーは存在しません";
  }
};

/**
 * Count the number of inputted letters
 * @param id The identifier of <input> or <textarea> which you want to count the number of letters.
 * @returns {string}
 */
const lengthCount = (id) => {
  const currentLength = document.getElementById(id).value.length;
  const maxLength = document.getElementById(id).maxLength;
  return (document.getElementById(`${id}-length-count`).innerText = `(${currentLength}/${maxLength})`);
};

const queryClubData = (clubId) => {
  return new Promise((resolve, reject) => {
    return clubRef.child(clubId).once("value", (snapshot) => {
      resolve(snapshot.val());
    });
  });
};

const queryEventData = (eventId) => {
  return new Promise((resolve, reject) => {
    return eventRef.child(eventId).once("value", (snapshot) => {
      resolve(snapshot.val());
    });
  });
};

const querySpecifiedCommentData = (commentId) => {
  return new Promise((resolve, reject) => {
    return commentRef.child(commentId).once("value", (snapshot) => {
      resolve(snapshot.val());
    });
  });
};

const querySpecifiedPostData = (postId) => {
  return new Promise((resolve, reject) => {
    return postRef.child(postId).once("value", (snapshot) => {
      resolve(snapshot.val());
    });
  });
};

const queryUserData = (userId) => {
  return new Promise((resolve, reject) => {
    return userRef.child(userId).once("value", (snapshot) => {
      resolve(snapshot.val());
    });
  });
};

const resizeTextarea = (id) => {
  const area = document.getElementById(id);
  area.addEventListener("input", () => {
    area.style.height = "20px";
    area.style.height = area.scrollHeight + "px";
  });
};

const removeHtmlTags = (html) => {
  const text = html.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "");
  return text;
};

const setPagination = (maxPage, currentPage) => {
  // Get a DOM node for pagination
  const paginationHtml = document.getElementById("pagination");

  // Set variable for pagination
  let pagination = "";
  const pageNum = 5; // The number of containers to display as selected page
  const pageEnd = pageNum - 1; //
  const pagePos = 2; // Position of active page (pageNum - 1 - pagePos)
  const previousPage = currentPage - 1; // Previous page number
  const nextPage = currentPage + 1; // Next page number
  let startPage = 0; // Start page number
  let endPage = 0; // End page number
  // Determine start page
  if (maxPage <= pageNum) {
    startPage = 1;
  } else {
    if (currentPage - pagePos > 1) {
      startPage = currentPage - pagePos;
    } else {
      startPage = 1;
    }
    if (startPage + pageEnd > maxPage) {
      startPage = maxPage - pageEnd;
    }
  }
  if (maxPage <= pageNum) {
    endPage = maxPage;
  } else {
    endPage = startPage + pageEnd;
  }
  // Set top page button
  pagination += `<nav aria-label="Page navigation example">
                        <ul class="pagination justify-content-center">
                          <li class="page-item">
                            <a class="page-link" href="?page=1" aria-label="Top">
                              <span aria-hidden="true">&laquo;</span><span class="sr-only">Top</span>
                            </a>
                          </li>`;
  // Set prev page button
  if (currentPage > 1) {
    pagination += `<li class="page-item">
                            <a class="page-link" href="?page=${previousPage}" aria-label="Previous">
                              <span aria-hidden="true">&lt;</span><span class="sr-only">Previous</span>
                            </a>
                           </li>`;
  }
  // Determine which button is current page
  for (startPage; startPage <= endPage; startPage++) {
    if (startPage === currentPage) {
      pagination += `<li class="page-item active">
                                <a class="page-link" href="?page=${startPage}">
                                  ${startPage}<span class="sr-only">(current)</span>
                                </a>
                               </li>`;
    } else {
      pagination += `<li class="page-item">
                                <a class="page-link" href="?page=${startPage}">${startPage}</a>
                               </li>`;
    }
  }
  // Set next page button
  if (maxPage > currentPage) {
    pagination += `<li class="page-item">
                            <a class="page-link" href="?page=${nextPage}" aria-label="Next">
                              <span aria-hidden="true">&gt;</span><span class="sr-only">Next</span>
                            </a>
                           </li>`;
  }
  // Set last page button
  pagination += `<li class="page-item">
                        <a class="page-link" href="?page=${maxPage}" aria-label="Last">
                          <span aria-hidden="true">&raquo;</span><span class="sr-only">Last</span>
                        </a>
                       </li>
                      </ul>
                     </nav>`;
  // Load pagination view
  paginationHtml.innerHTML = pagination;
  return true;
};

const signOut = () => {
  return firebase
    .auth()
    .signOut()
    .then(() => {
      return window.location.replace("/");
    })
    .catch((error) => {
      console.log(error);
    });
};

const switchSelectedButton = (name) => {
  const nameValues = document.getElementsByName(name);
  nameValues.forEach((nameValue) => {
    if (nameValue.checked) {
      nameValue.className = "p-button-selected";
    } else {
      nameValue.className = "p-button-unselected";
    }
  });
};

const updateMultiPath = (updateJson) => {
  return database.ref().update(updateJson);
};

/**
 * When user select an image file from his local directory, upload it to Firebase Storage, get download URL,
 * and set the URL to the src property of img tag for displaying the thumbnail.
 * @param {string} id The identifier of input tag for uploading files
 * @param {string} clubId
 */
const uploadMovie = (id, clubId) => {
  let setFile = document.getElementById(id);
  setFile.addEventListener("change", (event) => {
    console.log("Start event listener.", event.target);
    const file = event.target.files;
    const file_name = clubId;
    const fileType = file[0].type;

    // Validate the type of uploaded file
    if (!file || !fileType.match(/video\/*/)) return false;

    blob = new Blob(file, { type: fileType });
    console.log("Blob: ", blob);

    const uploadRef = movieRef.child(file_name);
    const uploadTask = uploadRef.put(blob);

    try {
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
              console.log("Upload is paused");
              break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
          console.error("Failed to upload file. ERROR: ", error);
        },
        () => {
          // Handle successful uploads on complete
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            console.log("File available at", downloadURL);
            const video = document.getElementById(`${id}-video`);
            video.setAttribute("src", downloadURL);
            video.load();
            console.log("Loaded!");
            return true;
          });
        }
      );
    } catch (e) {
      console.error(e);
      alert("動画のアップロードに失敗しました。ネットワーク環境を確かめてください。");
      return false;
    }
  });
};

/**
 * Upload an image to Firebase Storage, and then generate HTML element for preview.
 * @param id
 * @param index
 */
const uploadImageWithPreview = (id, index, fileName) => {
  const previewArea = document.getElementById("preview-area");

  let setFile = document.getElementById(id);
  setFile.addEventListener(
    "change",
    (event) => {
      const file = event.target.files;
      blob = new Blob(file, { type: "image/jpeg" });

      const uploadRef = imageRef.child(fileName);
      const uploadTask = uploadRef.put(blob);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
              console.log("Upload is paused");
              break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
          console.error("Failed to upload file. ERROR: ", error);
        },
        () => {
          // Handle successful uploads on complete
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            console.log("File available at", downloadURL);
            const fileName = uploadTask.snapshot.ref.name;
            const previewImage = `<div class="col-4 p-image__thumb" data-value="${fileName}">
                                        <span class="p-image__thumb-delete" onclick="return deleteUploadedFile(this)">&times;</span>
                                        <img id="${id}-${index}-thumb" src="${downloadURL}">
                                      </div>`;

            previewArea.insertAdjacentHTML("beforeend", previewImage);
          });
        }
      );
    },
    {
      once: true,
    }
  );
};
