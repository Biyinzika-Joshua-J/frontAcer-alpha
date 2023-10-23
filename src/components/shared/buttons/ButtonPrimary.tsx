import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCircleStop,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { Url } from "url";

interface Props {
  text: string;
  classes: string;
  link?: Url;
  arrow?: boolean;
}

const ButtonPrimary = ({ text, classes, link, arrow }: Props) => {
  return (
    <Button className={`${classes}`} asChild>
      <Link href={link} className="flex items-center">
        <span>{text}</span>{" "}
        {arrow && (
          <span className="ml-4">
            <FontAwesomeIcon icon={faArrowRight} className="text-white" />
          </span>
        )}
      </Link>
    </Button>
  );
};

export default ButtonPrimary;
