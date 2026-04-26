import type { ComponentProps } from "react";
import { FontAwesomeIcon as BaseFontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type Props = Omit<ComponentProps<typeof BaseFontAwesomeIcon>, "icon"> & {
  icon: IconDefinition;
};

export default function AwesomeReactIcon(props: Props) {
  const { icon, ...rest } = props;
  return <BaseFontAwesomeIcon icon={icon} {...rest} />;
}
