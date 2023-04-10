import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgStationery = (
    { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        aria-labelledby={titleId}
        {...props}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
            fill='currentColor'
            d='m6 22-.624.416a.75.75 0 0 0 1.248 0L6 22Zm-1.328-1.992-.624.416.624-.416Zm2.656 0-.624-.416.624.416ZM4 5.25a.75.75 0 0 0 0 1.5v-1.5Zm4 1.5a.75.75 0 0 0 0-1.5v1.5Zm9-1.5a.75.75 0 0 0 0 1.5v-1.5Zm2 1.5a.75.75 0 0 0 0-1.5v1.5Zm-2 2.5a.75.75 0 0 0 0 1.5v-1.5Zm2 1.5a.75.75 0 0 0 0-1.5v1.5Zm-2 2.5a.75.75 0 0 0 0 1.5v-1.5Zm2 1.5a.75.75 0 0 0 0-1.5v1.5Zm-2 2.5a.75.75 0 0 0 0 1.5v-1.5Zm2 1.5a.75.75 0 0 0 0-1.5v1.5Zm-6-16h4v-1.5h-4v1.5ZM18.25 4v16h1.5V4h-1.5ZM17 21.25h-4v1.5h4v-1.5ZM11.75 20V4h-1.5v16h1.5ZM13 21.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 13 22.75v-1.5ZM18.25 20c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 19.75 20h-1.5ZM17 2.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 17 1.25v1.5Zm-4-1.5A2.75 2.75 0 0 0 10.25 4h1.5c0-.69.56-1.25 1.25-1.25v-1.5ZM7.25 4v13.789h1.5V4h-1.5Zm-2.5 13.789V4h-1.5v13.789h1.5Zm1.954 1.803-1.328 1.992 1.248.832 1.328-1.992-1.248-.832Zm-.08 1.992-1.328-1.992-1.248.832 1.328 1.992 1.248-.832ZM3.25 17.789c0 .938.278 1.854.798 2.635l1.248-.832a3.25 3.25 0 0 1-.546-1.803h-1.5Zm4 0a3.25 3.25 0 0 1-.546 1.803l1.248.832a4.75 4.75 0 0 0 .798-2.635h-1.5ZM6 2.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 6 1.25v1.5Zm0-1.5A2.75 2.75 0 0 0 3.25 4h1.5c0-.69.56-1.25 1.25-1.25v-1.5Zm-2 5.5h4v-1.5H4v1.5Zm13 0h2v-1.5h-2v1.5Zm0 4h2v-1.5h-2v1.5Zm0 4h2v-1.5h-2v1.5Zm0 4h2v-1.5h-2v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgStationery);
export default ForwardRef;
