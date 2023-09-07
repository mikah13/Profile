import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { HiExternalLink, HiCode } from "react-icons/hi";
import { cn } from "@/lib/utils";
type Props = {
  index: number,
  data: {
    title: string;
    subtitle: string;
    description: string;
    sourceURL: string;
    siteURL: string;
    imageURL: string;
    imageAltText: string;
    stack?: {
      color: string;
      component: any;
    }[];
  };
};

const ProjectCard = (props: Props) => {
  const {
    title,
    subtitle,
    description,
    sourceURL,
    siteURL,
    imageURL = "",
    imageAltText,
    stack,
  } = props.data;
  const { index } = props;
  return (
    <div
      className=" max-w-[450px] mx-auto transition-container hover:shadow-2xl bg-introCard bg-50% p-1 animate-[gradient] rounded-xl hover:shadow-indigo-500/50"
    >
      <Card className="w-full  min-h-min h-full shadow-2xl cursor-pointer bg-zinc-100  dark:bg-black px-2 ">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          {/* <CardDescription>{subtitle}</CardDescription> */}
        </CardHeader>
        <CardContent className="flex flex-col w-full pb-0">
          <AspectRatio ratio={16 / 9}>
            <Image
              fill
              alt={imageAltText}
              src={imageURL}
              className="rounded-md object-cover"
            />
          </AspectRatio>


          <div>


            <Separator className="my-2 dark:bg-white" />
            <div className="flex flex-row h-4 items-center justify-evenly text-sm space-x-4 ">
              <a
                href={sourceURL === "" ? "#" : sourceURL}
                target="_blank"
                className={cn(
                  "flex items-center gap-x-2 font-bold underline underline-offset-4 hover:text-pink-500 dark:hover:text-pink-500",
                  sourceURL !== ""
                    ? "text-violet-700 dark:text-purple-300 "
                    : "text-stone-300 dark:text-stone-700 pointer-events-none"
                )}
              >
                <HiCode /> Source Code
              </a>
              <Separator orientation="vertical" className=" dark:bg-white h-full" />
              <a
                href={siteURL}
                target="_blank"
                className="flex items-center gap-x-2 dark:text-purple-300 text-violet-700  font-bold  underline underline-offset-4 hover:text-pink-500 dark:hover:text-pink-500"
              >
                <HiExternalLink />
                Visit Site
              </a>
            </div>
            <Separator className="my-2 dark:bg-white" />
          </div>
        </CardContent>
        <CardFooter>


          <div className="my-1">
            {stack && (
              <div className="flex space-x-2 text-4xl my-1">
                {stack.map((Icon, index) => {
                  return (
                    <>
                      <Icon.component className={cn(Icon.color)} key={index} />
                    </>
                  );
                })}
              </div>
            )}
            <p>{description}</p>
          </div>
        </CardFooter>
      </Card>
    </div>

  );
};

export default ProjectCard;
