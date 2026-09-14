
const submitForm = () => {
    const mssv = document.getElementById("txtMSSV").value;
    const hoTen = document.getElementById("txtHoVaTen").value;
    const queQuan = document.getElementById("txtQueQuan").value;
    const ngaySinh = document.getElementById("txtNgaySinh").value;

    const sinhVien = JSON.parse(localStorage.getItem("sinhVien")) || [];
    const newStudent = {
        mssv: mssv,
        hoTen: hoTen,
        queQuan: queQuan,
        ngaySinh: ngaySinh
    };
    sinhVien.push(newStudent);
    localStorage.setItem("sinhVien", JSON.stringify(sinhVien));

    alert("Đã thêm sinh viên thành công!");
}

document.getElementById('submitBtn').addEventListener('click', submitForm)