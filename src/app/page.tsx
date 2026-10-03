import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
  Meta,
  Line,
} from "@once-ui-system/core";
import { home, about, person, baseURL, routes } from "@/resources";
import { Mailchimp } from "@/components";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";
import { Card, Media } from "@once-ui-system/core";
import { FaInstagram, FaPinterest, FaWhatsapp } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { MdPhone, MdEmail } from "react-icons/md";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {

  const topNavigation = [
    {
      title: "Catering & Sweets Partners",
      image: "/images/Tab/Tab_PEP_1.jpg",
      href: "/catering-sweets",
      theme: "light",
    },
    {
      title: "Premium Sweet Box",
      image: "/images/Tab/Tab_PEP_2.jpg",
      href: "/premium-sweet-box",
      theme: "peach",
    },
    {
      title: "Catering & Sweets Partners",
      image: "/images/Tab/Tab_PEP_3.jpg",
      href: "/catering-sweets",
      theme: "light",
    },
    {
      title: "PEP",
      subtitle: "PREMIUM ECO PACKAGING",
      image: "/images/Tab/Tab_PEP_4.jpg",
      href: "/",
      theme: "dark",
    },
  ];

  const serviceNavigation = [
    {
      title: "Corporate Gifts",
      image: "/images/secondTab/Corporate Gift_1.jpg",
      href: "/corporate-gifts",
    },
    {
      title: "Promotional Products",
      image: "/images/secondTab/Promotional Product_2.jpg",
      href: "/promotional-products",
    },
    {
      title: "Company Brand Stores",
      image: "/images/secondTab/Dry Fruit & Nuts_3.jpg",
      href: "/company-brand-stores",
    },
    {
      title: "New Hire Kits",
      image: "/images/secondTab/Sweet & Catering_4.jpg",
      href: "/new-hire-kits",
    },
    {
      title: "Drop Ship & Warehousing",
      image: "/images/secondTab/Company Brand Gifts_5.jpg",
      href: "/drop-ship",
    },
    {
      title: "E-Gifting Solutions",
      image: "/images/secondTab/Seasonal & Festival Gifts_6.jpg",
      href: "/e-gifting",
    },
    {
      title: "Seasonal & Festival Gifts",
      image: "/images/secondTab/E-Gifting Solution_7.jpg",
      href: "/festival-gifts",
    },
    {
      title: "Global Gifting",
      image: "/images/secondTab/Invitation & Wedding Gifts_8.jpg",
      href: "/global-gifting",
    },

    {
      title: "Seasonal & Festival Gifts",
      image: "/images/secondTab/Stores & Warehousing_9.jpg",
      href: "/festival-gifts",
    },
    {
      title: "Global Gifting",
      image: "/images/secondTab/Global Gifting_10.jpg",
      href: "/global-gifting",
    },
  ];

  const teamMembers = [
    {
      role: "Sales Head",
      name: "Sonu Rathod",
      description:
        "We serve more than 100 brands worldwide and constantly reducing their current packaging costs, making it easier to choose us. Just click for your products delivery, 100% hassle-free.",
      image: "/images/home/Sonu Rathod.jpg",
      whatsapp: "https://wa.me/+919821689957",
      instagram: "https://www.instagram.com/premiumecopackaging?igsh=MjYwMW0xcWVqMGRw",
      pinterest: "https://pin.it/6FzcqPu7k",
    },
    {
      role: "Founder & Production Manager",
      name: "Deepika Rathod",
      description:
        "We have high-quality work parameters: Hygiene Inspection, product finishing inspection, pre-shipping inspection; we ensure that our customers receive the quality product.",
      image: "/images/home/Deepika Rathod.jpg",
      whatsapp: "https://wa.me/+917503238757",
      instagram: "https://www.instagram.com/premiumecopackaging?igsh=MjYwMW0xcWVqMGRw",
      pinterest: "https://pin.it/6FzcqPu7k",
    },
    {
      role: "Senior Designer",
      name: "Vanessa",
      description:
        "Create overall design solutions, from the choice of color, material, and printing with my professional skills to create the strongest brand.",
      image: "/images/home/Vanessa.jpg",
      whatsapp: "https://wa.me/+919654133663",
      instagram: "https://www.instagram.com/premiumecopackaging?igsh=MjYwMW0xcWVqMGRw",
      pinterest: "https://pin.it/6FzcqPu7k",
    },
  ];

  const officeMapLink =
    "https://www.google.com/maps?q=28.50606346130371,77.32718658447266&z=17&hl=en";
  const factoryMapLink =
    "https://maps.app.goo.gl/zBuaupxiJWkX59RH9?g_st=ipc";

  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center">
          {/* Two Row Navigation */}
          <RevealFx fillWidth translateY="8" delay={0.2}>
            <Column fillWidth gap="24">

              {/* First Row */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                  gap: "8px",
                  width: "100%",
                }}
              >
                {topNavigation.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    style={{
                      display: "block",
                      width: "90%",
                      aspectRatio: "2 / 1",
                      overflow: "hidden",
                      borderRadius: "12px",
                      textDecoration: "none",
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        display: "block",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "12px",
                      }}
                    />
                  </a>
                ))}
              </div>

              {/* Second Row */}
              {/* Second Row */}
              {/* Second Row - auto scrolling */}
              <style>{`
  @keyframes serviceMarquee {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }
  .service-marquee {
    overflow: hidden;
    width: 100%;
    padding: 20px 0;
  }
  .service-marquee-track {
    display: flex;
    width: max-content;
    animation: serviceMarquee 30s linear infinite;
  }
  .service-marquee:hover .service-marquee-track {
    animation-play-state: paused;
  }
  @media (prefers-reduced-motion: reduce) {
    .service-marquee-track { animation: none; }
    .service-marquee { overflow-x: auto; }
  }
`}</style>

              <div className="service-marquee">
                <div className="service-marquee-track">
                  {[...serviceNavigation, ...serviceNavigation].map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      aria-hidden={index >= serviceNavigation.length ? true : undefined}
                      tabIndex={index >= serviceNavigation.length ? -1 : undefined}
                      style={{
                        flex: "0 0 auto",
                        width: "110px",
                        marginRight: "12px",     // use margin, not gap, so the loop is seamless
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textDecoration: "none",
                        color: "inherit",
                        backgroundColor:'white',
                        borderRadius:12
                      }}
                    >
                      <div
                        style={{
                          width: "100%",
                          aspectRatio: "1 / 1",
                          overflow: "hidden",
                          borderRadius: "12px",
                        }}
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          style={{
                            display: "block",
                            width: "100%",
                            height: "100%",
                            marginTop:10,
                            objectFit: "cover",
                            transform: "scale(1.25) translateY(6%)",
                            transformOrigin: "center",
                          }}
                        />
                      </div>
                    </a>
                  ))}
                </div>
              </div>

            </Column>
          </RevealFx>
          {/* <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="32">
            <Text
              wrap="balance"
              variant="heading-default-xl"
              style={{ color: "#33612c", fontSize: "1.8rem", lineHeight: "1.2" }}
            >
              {home.subline}
            </Text>
          </RevealFx> */}
          {/* <RevealFx paddingTop="12" delay={0.4} horizontal="center" paddingLeft="12">
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="m"
              weight="default"
              arrowIcon
            >
              <Row gap="8" vertical="center" paddingRight="4">
                {about.avatar.display && (
                  <Avatar
                    marginRight="8"
                    style={{ marginLeft: "-0.75rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                {about.title}
              </Row>
            </Button>
          </RevealFx> */}
        </Column>
      </Column>
      <RevealFx translateY="16" delay={0.6}>
        <Projects range={[1, 1]} />
      </RevealFx>

      <Column fillWidth gap="32">
        <Heading as="h2" variant="display-strong-xs">
          Our Categories
        </Heading>

        <Row fillWidth gap="32" s={{ direction: "column" }}>
          {home.galleryCategories.map((item) => (
            <Card
              key={item.id}
              href={`/gallery?category=${item.category}`}
              fillWidth
              direction="column"
              radius="l"
              overflow="hidden"
              style={{ flex: "1 1 calc(50% - 16px)" }} // ✅ 2-column layout
            >
              <Media
                src={item.image}
                alt={item.title}
                aspectRatio="1/1"
                sizes="(min-width: 768px) 50vw, 100vw" // ✅ image fills half screen on desktop
              />

              <Column padding="20" gap="12">
                <Heading variant="heading-strong-m">
                  {item.title}
                </Heading>
                <Text onBackground="neutral-weak">
                  {item.description}
                </Text>
              </Column>
            </Card>
          ))}
        </Row>
      </Column>

      {/* About Us Section */}
      <Column fillWidth gap="32">
        <Heading as="h2" variant="display-strong-xs">
          About Us
        </Heading>

        <Column maxWidth="l" gap="20">
          <Heading as="h3" variant="heading-strong-m">
            Company Profile
          </Heading>
          <Text onBackground="neutral-weak">
            We are engaged in offering paper packaging products. Our range is biodegradable and is manufactured with great care by skilled workers in our factory. We have received excellent feedback for our eco product range that is convenient, qualitative, disposable, and great value for money.
            <br /><br />
            Our organization is considered one of the leading manufacturers, exporters, and suppliers of wedding and corporate gift boxes. Our range is fabricated from hygienic, food-grade raw materials that make the end product sustainable and well-crafted.
          </Text>

          <Heading as="h3" variant="heading-strong-m">
            Why Choose Us?
          </Heading>

          <Column gap="12">
            <Row gap="12" wrap>
              <Badge>Environmental Friendly</Badge>
              <Badge>Natural Materials</Badge>
              <Badge>High Quality Paper</Badge>
              <Badge>Recyclable Material</Badge>
            </Row>

            <Text onBackground="neutral-weak">
              Premium Eco Packaging has earned a leading position in the market for offering high-quality wedding invites and boxes.
              <br /><br />
              We believe our competitive advantage lies in fast lead times, excellent customer service, and quality products. Please do not hesitate to contact us if you require a product not listed on our site or have any questions.
            </Text>
          </Column>
        </Column>
      </Column>

      {/* Team Section */}
      <Column fillWidth gap="32">
        <Heading as="h2" variant="display-strong-xs">
          Our Team
        </Heading>

        <Row fillWidth gap="32" s={{ direction: "column" }}>
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              fillWidth
              direction="column"
              radius="l"
              overflow="hidden"
              style={{ flex: "1 1 calc(50% - 16px)", cursor: "pointer" }}
            >
              {/* Image */}
              <Media
                src={member.image}
                alt={member.name}
                aspectRatio="3/4"
              />

              {/* Info */}
              <Column padding="20" gap="8">
                {/* Role */}
                <Text style={{ fontSize: "0.8rem", fontWeight: "400" }}>
                  {member.role}
                </Text>

                {/* Name */}
                <Text style={{ fontSize: "1.25rem", fontWeight: "600" }}>
                  {member.name}
                </Text>

                {/* Description */}
                <Text onBackground="neutral-weak">
                  {member.description}
                </Text>

                {/* Social Media */}
                <Row gap="16" marginTop="12">
                  {member.instagram && (
                    <a href={member.instagram} target="_blank" rel="noreferrer">
                      <FaInstagram size={20} color="#E1306C" />
                    </a>
                  )}
                  {member.pinterest && (
                    <a href={member.pinterest} target="_blank" rel="noreferrer">
                      <FaPinterest size={20} color="#BD081C" />
                    </a>
                  )}
                  {member.whatsapp && (
                    <a href={member.whatsapp} target="_blank" rel="noreferrer">
                      <FaWhatsapp size={20} color="#25D366" />
                    </a>
                  )}
                </Row>
              </Column>
            </Card>
          ))}
        </Row>
      </Column>

      {routes["/blog"] && (
        <Column fillWidth gap="24" marginBottom="l">
          <Row fillWidth paddingRight="64">
            <Line maxWidth={48} />
          </Row>

          <Row fillWidth gap="24" marginTop="40" s={{ direction: "column" }}>

            {/* Heading */}
            <Row flex={1} paddingLeft="l" paddingTop="24">
              <Heading as="h2" variant="display-strong-xs" wrap="balance">
                What Our Clients Say
              </Heading>
            </Row>

            {/* Reviews */}
            <Row flex={3} paddingX="20" gap="24" s={{ direction: "column" }}>

              {/* Review 1 */}
              <Column
                style={{
                  flex: "1 1 calc(50% - 16px)",
                  border: "1px solid #eee",
                  borderRadius: "12px",
                  padding: "20px",
                }}
                gap="8"
              >
                {/* Icon */}
                <div style={{ fontSize: "40px", color: "#000" }}>👤</div>

                {/* Name */}
                <Heading variant="heading-strong-m">Avinash</Heading>

                {/* Company */}
                <Text style={{ fontSize: "0.85rem", color: "#555", marginBottom: "8px" }}>
                  Dhir Garden & Party Lawn
                </Text>

                {/* Review Text */}
                <Text onBackground="neutral-weak">
                  We used PEP service for our wedding invitations, and they were absolutely perfect. Many friends and family contacted us to say they were the best wedding invitation cards they had ever received. Premium Eco Packaging cards was incredibly awesome 🙌 throughout the entire process and delivered quickly. We give them a 10 out of 10 rating and highly recommend them.
                </Text>
              </Column>

              {/* Review 2 */}
              <Column
                style={{
                  flex: "1 1 calc(50% - 16px)",
                  border: "1px solid #eee",
                  borderRadius: "12px",
                  padding: "20px",
                }}
                gap="8"
              >
                {/* Icon */}
                <div style={{ fontSize: "40px", color: "#000" }}>👤</div>

                {/* Name */}
                <Heading variant="heading-strong-m">Mr. Kush</Heading>

                {/* Company */}
                <Text style={{ fontSize: "0.85rem", color: "#555", marginBottom: "8px" }}>
                  LA Prime Production
                </Text>

                {/* Review Text */}
                <Text onBackground="neutral-weak">
                  It was a pleasure working with Premium Eco Packagings - Deepika Ma'am and her design team. They were so polite, communicative, and adept at checking formatting.
                  They created my cosmetic packaging boxes. Their embossing and foiling work was excellent.
                  Wow! Luxurious designed 🗃️ Boxes created it was absolutely premium work 👍
                  I highly recommend them!
                </Text>
              </Column>

            </Row>
          </Row>

          <Row fillWidth paddingLeft="64" horizontal="end">
            <Line maxWidth={48} />
          </Row>
        </Column>
      )}



      <Projects range={[1]} />


      {/* <Mailchimp /> */}

      <Column fillWidth gap="32">
        <Heading as="h2" variant="display-strong-xs">Our Locations</Heading>
        <Row fillWidth gap="32" s={{ direction: "column" }}>
          {/* Office Address Card */}
          <Card
            href={officeMapLink}
            rel="noreferrer"
            fillWidth
            direction="row"
            radius="l"
            overflow="hidden"
            style={{ cursor: "pointer", alignItems: "center", padding: "20px" }}
          >
            <MdLocationOn size={36} color="#33612c" style={{ marginRight: "16px" }} />
            <Column>
              <Heading variant="heading-strong-m">Office Address</Heading>
              <Text onBackground="neutral-weak">
                Premium Eco Packaging, 4th Floor, Building No. 381/1 Badarpur, S-BLK, Saurabh Vihar, New Delhi -110044 Delhi | India
              </Text>
              <Text style={{ color: "#33612c", fontWeight: "500", marginTop: "8px" }}>
                Go to Map
              </Text>
            </Column>
          </Card>

          {/* Factory Address Card */}
          <Card
            href={factoryMapLink}
            rel="noreferrer"
            fillWidth
            direction="row"
            radius="l"
            overflow="hidden"
            style={{ cursor: "pointer", alignItems: "center", padding: "20px" }}
          >
            <MdLocationOn size={36} color="#33612c" style={{ marginRight: "16px" }} />
            <Column>
              <Heading variant="heading-strong-m">Factory Address</Heading>
              <Text onBackground="neutral-weak">
                Premium Eco Packaging, 8, Alli Ahmadpur Urf Garhi, Gautam Buddha Nagar, Jewar-203155, Uttar Pradesh | India
              </Text>
              <Text style={{ color: "#33612c", fontWeight: "500", marginTop: "8px" }}>
                Go to Map
              </Text>
            </Column>
          </Card>
        </Row>
      </Column>

      <Column fillWidth gap="32">
        <Heading as="h2" variant="display-strong-xs">Contact Helpdesk</Heading>
        <Row fillWidth gap="32" s={{ direction: "column" }}>
          {/* Phone / WhatsApp */}
          <Card
            href="https://wa.me/917503238757"
            rel="noreferrer"
            fillWidth
            direction="row"
            radius="l"
            overflow="hidden"
            style={{ cursor: "pointer", alignItems: "center", padding: "20px" }}
          >
            <MdPhone size={36} color="#33612c" style={{ marginRight: "16px" }} />
            <Column>
              <Heading variant="heading-strong-m">Helpdesk Mobile & WhatsApp</Heading>
              <Text style={{ color: "#33612c", fontWeight: "500", marginTop: "8px" }}>
                +91 7503238757
              </Text>
            </Column>
          </Card>

          {/* Email */}
          <Card
            href="mailto:Info@premiumecopackaging.com"
            fillWidth
            direction="row"
            radius="l"
            overflow="hidden"
            style={{ cursor: "pointer", alignItems: "center", padding: "20px" }}
          >
            <MdEmail size={36} color="#33612c" style={{ marginRight: "16px" }} />
            <Column>
              <Heading variant="heading-strong-m">Email</Heading>
              <Text style={{ color: "#33612c", fontWeight: "500", marginTop: "8px" }}>
                Info@premiumecopackaging.com
              </Text>
            </Column>
          </Card>
        </Row>
      </Column>
    </Column>
  );
}
