
const render = () => {
    const sinhVienFromStorage = JSON.parse(localStorage.getItem('sinhVien')) || []

    let htmlContent = sinhVienFromStorage.map(sv => `
        <tr>
            <td>${sv.mssv}</td>
            <td>${sv.hoTen}</td>
            <td>${sv.queQuan}</td>
            <td>${sv.ngaySinh}</td>
            <td>
                <button class="btn btn-danger" onclick="deleteStudent('${sv.mssv}')">Xóa</button>
            </td>
        </tr>
    `).join('');

    document.getElementById('table-content').innerHTML = htmlContent
}



const deleteStudent = (mssv) => {
     const sinhVienFromStorage = JSON.parse(localStorage.getItem('sinhVien')) || []
    const filterStudent = sinhVienFromStorage.filter(sv => sv.mssv !== mssv)
    localStorage.setItem('sinhVien', JSON.stringify(filterStudent))
    render()
    alert(`Đã xóa sinh viên có MSSV: ${mssv}`)
}

const resetData = () => {
    const sinhVien = [
        { mssv: '110123086', hoTen: 'Huỳnh Chí Đạt', queQuan: 'Tân An, Vĩnh Long', ngaySinh: '2005-12-10'},
        { mssv: '110123065', hoTen: 'Huỳnh Phan Vân Anh', queQuan: 'An Trường, Vĩnh Long', ngaySinh: '2005-05-15'},
        { mssv: '110123074', hoTen: 'Trương Thanh Bảo', queQuan: 'Long Đức, Vĩnh Long', ngaySinh: '2005-07-15'}
    ]

    localStorage.setItem('sinhVien', JSON.stringify(sinhVien))
    render()
}

document.getElementById('resetData').addEventListener('click', resetData)

render()