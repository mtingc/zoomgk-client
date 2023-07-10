import { IContentList } from "@/interfaces/Content/list.interface"

const ContentList = ({ list }: { list: IContentList[] }) => {
  return (
    <ul role="list" className="my-10 space-y-8">
      {list.map(({ title, description, icon }, index) => {
        const Icon = icon;
        return (
          <li key={index} className="flex gap-x-3">
            <Icon
              className="mt-1 h-5 w-5 flex-none text-play-200"
              aria-hidden="true"
            />
            <span>
              <strong className="font-semibold">{title}.</strong> {description}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default ContentList;
