import Link from "next/link";

import { Button } from "@/components/ui/button";

import {
  IconBrandGithub,
  IconLogoBing,
  IconLogoCentOS,
  IconLogoGoogle,
  IconLogoRockyLinux,
  IconSkillCSS,
  IconSkillDebianDark,
  IconSkillDebianLight,
  IconSkillDocker,
  IconSkillHTML,
  IconSkillJavaScript,
  IconSkillMysqlDark,
  IconSkillMysqlLight,
  IconSkillNextjsDark,
  IconSkillNextjsLight,
  IconSkillNodejsDark,
  IconSkillNodejsLight,
  IconSkillPrisma,
  IconSkillReactDark,
  IconSkillReactLight,
  IconSkillStackoverflowDark,
  IconSkillStackoverflowLight,
  IconSkillTailwindcssDark,
  IconSkillTailwindcssLight,
  IconSkillTypeScript,
} from "@/components/icons";

import { NICKNAME } from "@/constants";
import { socialMediaList } from "@/features/home";

export const revalidate = 60;

export default function Page() {
  let delay = 0;

  // 每次调用，增加延时
  const getDelay = () => (delay += 200);

  return (
    <div className="flex w-full flex-col justify-center px-6 pb-24 pt-8">
      <section className="w-screen-wrapper prose prose-neutral mx-auto max-w-screen-wrapper dark:prose-invert">
        <h2 className="text-3xl font-bold md:text-4xl">关于</h2>
        <div
          className="animate-fade-up animate-ease-in-out"
          style={{
            animationDelay: `${getDelay()}ms`,
          }}
        >
          <h2>我是谁</h2>
          <p>
            Hi~ 我是{NICKNAME}
            ，一名前端开发工程师，喜欢 AI，各种捣腾，偶尔写写文章。
          </p>
        </div>

        <div
          className="animate-fade-up animate-ease-in-out"
          style={{
            animationDelay: `${getDelay()}ms`,
          }}
        >
          <h2>我的技能</h2>
        </div>

        <div
          className="animate-fade-up animate-ease-in-out"
          style={{
            animationDelay: `${getDelay()}ms`,
          }}
        >
          <h3>前端</h3>
          <ul>
            <li>
              <IconSkillHTML className="mx-1 translate-y-0.5" /> HTML +
              <IconSkillCSS className="mx-1 translate-y-0.5" />
              CSS + <IconSkillJavaScript className="mx-1 translate-y-0.5" />
              JavaScript ，熟练使用
            </li>
            <li>
              <IconSkillTypeScript className="mx-1 translate-y-0.5" />
              TypeScript +
              <>
                <IconSkillReactDark className="mx-1 translate-y-0.5 dark:hidden" />
                <IconSkillReactLight className="mx-1 hidden translate-y-0.5 dark:inline-block" />
              </>
              React +
              <>
                <IconSkillNextjsDark className="mx-1 translate-y-0.5 dark:hidden" />
                <IconSkillNextjsLight className="mx-1 hidden translate-y-0.5 dark:inline-block" />
              </>
              Next.js + ahooks +
              <>
                <IconSkillTailwindcssDark className="mx-1 translate-y-0.5 dark:hidden" />
                <IconSkillTailwindcssLight className="mx-1 hidden translate-y-0.5 dark:inline-block" />
              </>
              Tailwind CSS，熟练使用
            </li>
          </ul>
        </div>
        <div
          className="animate-fade-up animate-ease-in-out"
          style={{
            animationDelay: `${getDelay()}ms`,
          }}
        >
          <h3>后端</h3>
          <ul>
            <li>
              <>
                <IconSkillNodejsDark className="mx-1 translate-y-0.5 dark:hidden" />
                <IconSkillNodejsLight className="mx-1 hidden translate-y-0.5 dark:inline-block" />
              </>
              Nest.js，较熟练使用
            </li>
            <li>
              <>
                <IconSkillNextjsDark className="mx-1 translate-y-0.5 dark:hidden" />
                <IconSkillNextjsLight className="mx-1 hidden translate-y-0.5 dark:inline-block" />
              </>
              Next.js + <IconSkillPrisma className="mx-1 translate-y-0.5" />
              Prisma +
              <>
                <IconSkillMysqlDark className="mx-1 translate-y-0.5 dark:hidden" />
                <IconSkillMysqlLight className="mx-1 hidden translate-y-0.5 dark:inline-block" />
              </>
              MySQL/MongoDb 搞全栈开发
            </li>
          </ul>
        </div>
        <div
          className="animate-fade-up animate-ease-in-out"
          style={{
            animationDelay: `${getDelay()}ms`,
          }}
        >
          <h3>其它</h3>
          <ul>
            <li>
              Zsh + Oh My Zsh + iTerm2 + Mononoki Nerd Font Mono，舒服的很
            </li>
            <li>
              用过 <IconLogoCentOS className="mx-1 translate-y-0.5" />
              CentOS、
              <>
                <IconSkillDebianDark className="mx-1 translate-y-0.5 dark:hidden" />
                <IconSkillDebianLight className="mx-1 hidden translate-y-0.5 dark:inline-block" />
              </>
              Debian、
              <IconLogoRockyLinux className="mx-1 translate-y-0.5" />
              Rocky Linux （最近使用）
            </li>
            <li>
              <IconSkillDocker className="mx-1 translate-y-0.5" />
              Docker + Orbstack，Docker 本地起数据库服务是真的方便
            </li>
            <li>
              使用 Caddy （配置超简单，无需手动配置 HTTPS 证书），反向代理 +
              配置 HTTPS + 开启 HTTP2
            </li>
            <li>
              熟练使用 <IconLogoGoogle className="mx-1 translate-y-0.5" />
              Google/
              <IconLogoBing className="mx-1 translate-y-0.5" />
              Bing 搜索 +
              <IconBrandGithub className="mx-1 translate-y-0.5" />
              GitHub +
              <>
                <IconSkillStackoverflowDark className="mx-1 translate-y-0.5 dark:hidden" />
                <IconSkillStackoverflowLight className="mx-1 hidden translate-y-0.5 dark:inline-block" />
              </>
              Stack Overflow + Chat GPT 解决遇到的各种问题
            </li>
          </ul>
        </div>

        <div
          className="animate-fade-up animate-ease-in-out"
          style={{
            animationDelay: `${getDelay()}ms`,
          }}
        >
          <h2>联系我</h2>
          <p>你可以通过👇下面任意一种方式联系我</p>
          <ul className="!mb-0 flex !list-none items-center space-x-4 !pl-0">
            {socialMediaList.map((el) => (
              <li key={el.link}>
                <Button asChild variant="outline" size="icon">
                  <Link href={el.link} target="_blank">
                    {el.icon}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
