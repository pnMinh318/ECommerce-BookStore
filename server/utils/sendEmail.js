import nodemailer from 'nodemailer'


const transporter = nodemailer.createTransport({
    service: 'gmail',
    // host: "smtp.ethereal.email",
    // port: 587,
    //secure: false, // true for 465, false for other ports
    auth: {
        user: '18110318@student.hcmute.edu.vn',
        pass: '18110318',
    },
});

const mailOptions = (emailTo) => {
    return ({
        from: '18110318@student.hcmute.edu.vn',
        to: emailTo,
        subject: 'Sending Email using Node.js',
        html:'<h1 style={text-align:center}>Đặt hàng thành công tại TLCN-Bookstore</h1><br></br>'
    })
};

export const sendEmail = async (emailTo) => {
    await transporter.sendMail(mailOptions(emailTo), function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}
