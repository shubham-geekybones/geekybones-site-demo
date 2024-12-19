import * as React from "react";
import Layout from "../../components/layout";
import DropYourQueries from "../../components/contact-us/drop-your-queries";
import FreeConsultationToday from "../../components/contact-us/free-consultation-today";
import ReadyToTalk from "../../components/contact-us/ready-to-talk";
import Banner from "./Banner";

const ContactPage = () => {
    return (
        <Layout currentPage={'Contact Us'} metaTitle={'Discuss your Requirements with our Experts | GeekyBones'} metaDescription={'Do you have any ideas on your mind or any specific project requirements? Contact the GeekyBones team today and get a free quote. '}>
            <Banner/>
            <DropYourQueries />
            <ReadyToTalk />
            <FreeConsultationToday />
        </Layout>
    )
}
export default ContactPage;
