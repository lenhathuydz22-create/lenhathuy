// ===============================
// DỮ LIỆU BÀI HỌC
// ===============================

const lessons = {

    toan: {
        name: "📐 Toán học",
        items: [
            {
                title: "Số nguyên",
                content: "Số nguyên gồm số nguyên âm, số 0 và số nguyên dương."
            },
            {
                title: "Phân số",
                content: "Phân số có dạng a/b, trong đó a là tử số và b là mẫu số, b khác 0."
            },
            {
                title: "Phương trình bậc nhất",
                content: "Phương trình bậc nhất một ẩn thường có dạng ax + b = 0, với a khác 0."
            },
            {
                title: "Diện tích hình chữ nhật",
                content: "Diện tích hình chữ nhật được tính bằng chiều dài nhân chiều rộng."
            }
        ]
    },

    khoahoc: {
        name: "🔬 Khoa học",
        items: [
            {
                title: "Trạng thái của vật chất",
                content: "Vật chất thường tồn tại ở ba trạng thái quen thuộc: rắn, lỏng và khí."
            },
            {
                title: "Lực và chuyển động",
                content: "Lực có thể làm thay đổi chuyển động hoặc làm vật bị biến dạng."
            },
            {
                title: "Hệ Mặt Trời",
                content: "Hệ Mặt Trời gồm Mặt Trời và các thiên thể chuyển động xung quanh nó."
            },
            {
                title: "Hệ hô hấp",
                content: "Hệ hô hấp giúp cơ thể trao đổi khí, đưa oxygen vào cơ thể và thải carbon dioxide."
            }
        ]
    },

    dialy: {
        name: "🌍 Địa lý",
        items: [
            {
                title: "Trái Đất",
                content: "Trái Đất là hành tinh thứ ba tính từ Mặt Trời và có một vệ tinh tự nhiên là Mặt Trăng."
            },
            {
                title: "Khí hậu",
                content: "Khí hậu là đặc điểm thời tiết của một khu vực được quan sát trong thời gian dài."
            },
            {
                title: "Địa lý Việt Nam",
                content: "Việt Nam nằm ở khu vực Đông Nam Á, có đường bờ biển dài và nhiều dạng địa hình."
            },
            {
                title: "Đại dương",
                content: "Đại dương bao phủ phần lớn bề mặt Trái Đất và đóng vai trò quan trọng đối với khí hậu."
            }
        ]
    },

    nguvan: {
        name: "📖 Ngữ văn",
        items: [
            {
                title: "Văn bản tự sự",
                content: "Văn bản tự sự thường kể lại một chuỗi sự việc có nhân vật, thời gian và diễn biến."
            },
            {
                title: "Văn miêu tả",
                content: "Văn miêu tả sử dụng từ ngữ để giúp người đọc hình dung rõ đặc điểm của người, vật hoặc cảnh."
            },
            {
                title: "Phép so sánh",
                content: "So sánh là đối chiếu sự vật, sự việc này với sự vật, sự việc khác để làm nổi bật đặc điểm."
            },
            {
                title: "Phép nhân hóa",
                content: "Nhân hóa là cách gọi hoặc tả sự vật bằng những từ ngữ vốn dùng cho con người."
            }
        ]
    },

    tienganh: {
        name: "🇬🇧 Tiếng Anh",
        items: [
            {
                title: "Đại từ nhân xưng",
                content: "Một số đại từ nhân xưng thường gặp: I, you, he, she, it, we, they."
            },
            {
                title: "Động từ To Be",
                content: "To be có các dạng thường gặp: am, is và are."
            },
            {
                title: "Thì hiện tại đơn",
                content: "Thì hiện tại đơn thường dùng để nói về thói quen, sự thật hoặc những việc xảy ra thường xuyên."
            },
            {
                title: "Từ vựng cơ bản",
                content: "Học từ vựng theo chủ đề sẽ giúp việc ghi nhớ và sử dụng tiếng Anh hiệu quả hơn."
            }
        ]
    },

    congnghe: {
        name: "💻 Công nghệ",
        items: [
            {
                title: "Máy tính hoạt động thế nào?",
                content: "Máy tính nhận dữ liệu, xử lý dữ liệu và đưa ra kết quả theo các chương trình."
            },
            {
                title: "CPU là gì?",
                content: "CPU là bộ xử lý trung tâm, thực hiện nhiều phép tính và điều khiển hoạt động của máy tính."
            },
            {
                title: "Internet là gì?",
                content: "Internet là hệ thống mạng kết nối rất nhiều thiết bị và mạng máy tính trên toàn thế giới."
            },
            {
                title: "Lập trình",
                content: "Lập trình là quá trình viết các câu lệnh để máy tính thực hiện một nhiệm vụ."
            },
            {
                title: "Trí tuệ nhân tạo",
                content: "AI là lĩnh vực nghiên cứu các hệ thống có khả năng thực hiện một số nhiệm vụ thường cần đến trí thông minh của con người."
            }
        ]
    }
};


// ===============================
// HIỂN THỊ BÀI HỌC
// ===============================

function showLessons(subject) {

    const lessonArea = document.getElementById("lessonArea");

    const data = lessons[subject];

    if (!data) {
        return;
    }

    let html = `
        <h2>${data.name}</h2>
        <p>Chọn một bài để bắt đầu học.</p>
    `;

    data.items.forEach((lesson, index) => {

        html += `
            <div class="lesson-item">
                <h3>${index + 1}. ${lesson.title}</h3>
                <p>${lesson.content}</p>
            </div>
        `;

    });

    lessonArea.innerHTML = html;

    lessonArea.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


// ===============================
// TÌM KIẾM KIẾN THỨC
// ===============================

function searchKnowledge() {

    const input = document
        .getElementById("searchInput")
        .value
        .trim()
        .toLowerCase();

    const result = document.getElementById("searchResult");

    if (input === "") {

        result.innerHTML = `
            <p style="color:#888;">
                Hãy nhập nội dung bạn muốn tìm.
            </p>
        `;

        return;
    }

    let found = [];

    Object.values(lessons).forEach(subject => {

        subject.items.forEach(lesson => {

            const text =
                lesson.title.toLowerCase() +
                " " +
                lesson.content.toLowerCase();

            if (text.includes(input)) {

                found.push({
                    subject: subject.name,
                    title: lesson.title,
                    content: lesson.content
                });

            }

        });

    });


    if (found.length === 0) {

        result.innerHTML = `
            <div class="lesson-area">
                <h3>Không tìm thấy kết quả</h3>
                <p>
                    Thử tìm bằng từ khóa khác nhé.
                </p>
            </div>
        `;

        return;
    }


    let html = `
        <div class="lesson-area">
            <h3>Tìm thấy ${found.length} kết quả</h3>
    `;


    found.forEach(item => {

        html += `
            <div class="lesson-item">

                <p style="color:#777;">
                    ${item.subject}
                </p>

                <h3>${item.title}</h3>

                <p>
                    ${item.content}
                </p>

            </div>
        `;

    });


    html += `</div>`;

    result.innerHTML = html;
}


// ===============================
// TRỢ LÝ ĐƠN GIẢN
// ===============================

function askAssistant() {

    const input = document
        .getElementById("questionInput")
        .value
        .trim()
        .toLowerCase();

    const answer = document.getElementById("assistantAnswer");


    if (input === "") {

        answer.innerHTML = `
            <p>Hãy nhập một câu hỏi trước nhé.</p>
        `;

        return;
    }


    if (input.includes("trái đất")) {

        answer.innerHTML = `
            <p>
                🌍 Trái Đất là hành tinh thứ ba tính từ Mặt Trời
                và có một vệ tinh tự nhiên là Mặt Trăng.
            </p>
        `;

        return;
    }


    if (input.includes("cpu")) {

        answer.innerHTML = `
            <p>
                💻 CPU là bộ xử lý trung tâm của máy tính.
                Nó thực hiện nhiều phép tính và điều khiển
                các hoạt động của máy tính.
            </p>
        `;

        return;
    }


    if (input.includes("ai") ||
        input.includes("trí tuệ nhân tạo")) {

        answer.innerHTML = `
            <p>
                🤖 AI là trí tuệ nhân tạo, một lĩnh vực công nghệ
                giúp máy tính thực hiện một số nhiệm vụ
                thường cần đến khả năng thông minh của con người.
            </p>
        `;

        return;
    }


    answer.innerHTML = `
        <p>
            🤔 Mình chưa có câu trả lời cho câu hỏi này.
            Bạn thử tìm trong phần <strong>Học tập</strong>
            hoặc dùng ô tìm kiếm phía trên nhé.
        </p>
    `;
}


// ===============================
// NHẤN ENTER ĐỂ TÌM KIẾM
// ===============================

document
    .getElementById("searchInput")
    .addEventListener("keydown", function(event) {

        if (event.key === "Enter") {
            searchKnowledge();
        }

    });


// ===============================
// NHẤN ENTER ĐỂ HỎI TRỢ LÝ
// ===============================

document
    .getElementById("questionInput")
    .addEventListener("keydown", function(event) {

        if (event.key === "Enter") {
            askAssistant();
        }

    });