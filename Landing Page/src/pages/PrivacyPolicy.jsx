import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";

function PrivacyPolicy(props) {
  return (
    <div className="page-container">
      <Header md={props.md} />
      <PageHeader title="Privacy Policy" />

      <section className="container privacy-policy-content">
        <div>
          <p>
            This privacy policy ("policy") will help you understand how Talk
            Motion ("us", "we", "our") uses and protects the data you provide to
            us when you visit and use talk-motion.com ("website", "service"). We
            reserve the right to change this policy at any given time, of which
            you will be promptly updated. If you want to make sure that you are
            up to date with the latest changes, we advise you to frequently
            visit this page.
          </p>
        </div>

        <div>
          <h4>What User Data We Collect</h4>
          <p>When you visit the website, we may collect the following data:</p>
          <li>Your IP address</li>
          <li>Your contact information and email address.</li>
          <li>Other information such as interests and preferences.</li>
          <li>Data profile regarding your online behavior on our website.</li>
        </div>

        <div>
          <h4>Why We Collect Your Data</h4>
          <p>We are collecting your data for several reasons:</p>
          <li>To better understand your needs.</li>
          <li>To improve our services and products.</li>
          <li>
            To send you promotional emails containing the information we think
            you will find interesting.
          </li>
          <li>
            To contact you to fill out surveys and participate in other types of
            market research.
          </li>
          <li>
            To customize our website according to your online behavior and
            personal preferences.
          </li>
        </div>

        <div>
          <h4>Safeguarding and Securing the Data</h4>
          <p>
            Talk Motion is committed to securing your data and keeping it
            confidential. [name] has done all in its power to prevent data
            theft, unauthorized access, and disclosure by implementing the
            latest technologies and software, which help us safeguard all the
            information we collect online.
          </p>
        </div>

        <div>
          <h4>Our Cookie Policy</h4>
          <p>
            Once you agree to allow our website to use cookies, you also agree
            to use the data it collects regarding your online behavior (analyze
            web traffic, web pages you spend the most time on, and websites you
            visit). The data we collect by using cookies is used to customize
            our website to your needs. After we use the data for statistical
            analysis, the data is completely removed from our systems. Please
            note that cookies don't allow us to gain control of your computer in
            any way. They are strictly used to monitor which pages you find
            useful and which you do not so that we can provide a better
            experience for you. If you want to disable cookies, you can do it by
            accessing the settings of your internet browser. You can visit
            www.internetcookies.com, which contains comprehensive information on
            how to do this on a wide variety of browsers and devices.
          </p>
        </div>

        <div>
          <h4>Links to Other Websites</h4>
          <p>
            Our website contains links that lead to other websites. If you click
            on these links [name] is not held responsible for your data and
            privacy protection. Visiting those websites is not governed by this
            privacy policy agreement. Make sure to read the privacy policy
            documentation of the website you go to from our website.
          </p>
        </div>

        <div>
          <h4>Restricting the Collection of your Personal Data</h4>
          <p>
            At some point, you might wish to restrict the use and collection of
            your personal data. You can achieve this by doing the following:
            When you are filling the forms on the website, make sure to check if
            there is a box which you can leave unchecked, if you don't want to
            disclose your personal information. If you have already agreed to
            share your information with us, feel free to contact us via email
            and we will be more than happy to change this for you. Talk Motion
            will not lease, sell or distribute your personal information to any
            third parties, unless we have your permission. We might do so if the
            law forces us. Your personal information will be used when we need
            to send you promotional materials if you agree to this privacy
            policy.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
