import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const mysqlCommand = `mysql -u "${process.env.DB_USER}" -h "${process.env.DB_HOST}" -P ${process.env.DB_PORT} --default-auth=mysql_native_password --password=${process.env.DB_PASSWORD} ${process.env.DB_NAME}`
const description = `SingleStore Elegance SDK is an NPM package that helps developers quickly and easily connect to SingleStoreDB, and build React.js-based applications with SingleStore Kai™ and MySQL connection support.`;


export default function Index() {

  // Example on how to run a query
  // eleganceServerClient.connection.query(
  //   'CREATE TABLE usersMarta (id BIGINT AUTO_INCREMENT PRIMARY KEY, created_at DATETIME);'
  // );

  return (
    <main className="relative flex min-h-screen w-full max-w-full" style={{
      backgroundImage: "url('/background.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "white"
    }}
    >
      <div className="flex w-full max-w-full flex-1 items-center justify-start gap-8 lg:gap-16 flex-col p-4">
        <div className="flex w-full max-w-[72rem] items-center justify-between py-4">
          <a className="inline-flex items-center justify-center" href="https://singlestore.com" target="_blank">
            <img src="/singlestore.svg" alt="SingleStore Logo" width={136} height={28.45} />
          </a>
          <a
            className="hover:bg-s2-link hover:border-s2-link inline-flex items-center justify-center rounded border border-white px-4 py-1 text-center transition-all"
            href="https://singlestore.com/cloud-trial"
            target="_blank"
          >
            Try Free
            <span className="inline-block ml-2 text-3xl leading-none pb-1">&rsaquo;</span>
          </a>
        </div>

        <div className="mt-auto relative h-auto w-[20.69%] min-w-[298px] max-w-[894px]">
          <div className="pt-[35.23%]" />
          <img src="/elegance-sdk.svg" alt="Elegance SDK Logo" />
        </div>

        <div className="mt-auto flex w-full max-w-4xl flex-col items-start justify-center pb-16">
          {
            process.env.DB_HOST ? (
              <div style={{ marginBottom: 36 }}>
                <p className="text-lg">
                  1. Run queries using the <span style={{ fontFamily: "monospace" }}>eleganceServerClient </span> already created for you.
                </p>
                <p style={{ width: "100%", backgroundColor: "black", fontFamily: "monospace", margin: 22, fontSize: 14 }}>
                  eleganceServerClient.connection.query(
                  <br />
                  &apos;CREATE TABLE users (id BIGINT AUTO_INCREMENT PRIMARY KEY, created_at DATETIME)&apos;
                  <br />
                  );
                </p>
                <p className="text-lg" style={{ marginTop: 22 }}>
                  2. Connect through MySQL CLI by running the following command on your terminal:
                </p>
                <p style={{ width: "100%", backgroundColor: "black", fontFamily: "monospace", margin: 22, fontSize: 14 }}>
                  {mysqlCommand}
                </p>
              </div>
            ) : (
              <p className="text-center text-lg font-medium">{description}</p>
            )
          }
          <div className="flex mt-8 lg:mt-16 flex-wrap w-full max-w-full items-stretch justify-center gap-4 lg:gap-10">
            <Card
              href="https://www.singlestore.com/blog/how-to-get-started-with-elegance-sdk/"
              title="Get started"
              text="Your step-by-step guide to using Elegance SDK"
            />
            <Card
              href="https://github.com/singlestore-labs/elegance-sdk/tree/main/packages/singlestore-elegance-sdk#usage"
              title="Docs"
              text="Find documentation and technical support, and various APIs."
            />
            <Card
              href="https://github.com/singlestore-labs/elegance-sdk/tree/main/packages/singlestore-elegance-sdk#templates"
              title="Templates"
              text="Explore our template library to apply the Elegance SDK."
            />
            <Card
              href="https://github.com/singlestore-labs/elegance-sdk/tree/main/packages/singlestore-elegance-sdk#example-apps"
              title="Examples"
              text="Discover example applications you can build with SingleStoreDB."
            />
          </div>
        </div>
      </div>
    </main >
  );
}


function Card({ title, text, href }: { title: string; text: string; href: string }) {
  return (
    <div className="flex-1 max-sm:basis-full">
      <a href={href} target="_blank" className="group flex flex-col">
        <h4 className="text-s2-purple-07 text-lg inline-flex items-center">
          {title}
          <span className="inline-block ml-3 text-4xl leading-none pb-1 group-hover:translate-x-1 transition-all">
            &rsaquo;
          </span>
        </h4>
        <p className="lg:mt-3 text-sm">{text}</p>
      </a>
    </div>
  );
}
