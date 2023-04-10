import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFiles = (
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
            d='M7 10h.75H7Zm4-4v-.75V6Zm6 0v.75V6Zm4 4h-.75.75Zm0 4.343h.75H21ZM13.343 22v-.75.75ZM11 22v.75V22Zm8.828-4.828-.53-.53.53.53Zm-3.656 3.656-.53-.53.53.53ZM3 14h-.75H3Zm0-8h-.75H3Zm10-4v-.75V2Zm2 18h-.75.75Zm4-4v.75V16ZM7.75 18v-8h-1.5v8h1.5ZM11 6.75h6v-1.5h-6v1.5ZM20.25 10v4.343h1.5V10h-1.5Zm-6.907 11.25H11v1.5h2.343v-1.5Zm5.955-4.609-3.657 3.657 1.06 1.06 3.658-3.656-1.06-1.06Zm-5.955 6.109c1.26 0 2.468-.5 3.359-1.391l-1.06-1.06a3.25 3.25 0 0 1-2.299.951v1.5Zm6.907-8.407a3.25 3.25 0 0 1-.952 2.298l1.06 1.06a4.75 4.75 0 0 0 1.392-3.358h-1.5ZM7.75 10A3.25 3.25 0 0 1 11 6.75v-1.5A4.75 4.75 0 0 0 6.25 10h1.5Zm-1.5 8A4.75 4.75 0 0 0 11 22.75v-1.5A3.25 3.25 0 0 1 7.75 18h-1.5ZM17 6.75A3.25 3.25 0 0 1 20.25 10h1.5A4.75 4.75 0 0 0 17 5.25v1.5ZM3.75 14V6h-1.5v8h1.5ZM7 2.75h6v-1.5H7v1.5ZM3.75 6A3.25 3.25 0 0 1 7 2.75v-1.5A4.75 4.75 0 0 0 2.25 6h1.5Zm-1.5 8A4.75 4.75 0 0 0 7 18.75v-1.5A3.25 3.25 0 0 1 3.75 14h-1.5ZM13 2.75A3.25 3.25 0 0 1 16.25 6h1.5A4.75 4.75 0 0 0 13 1.25v1.5ZM15.75 22v-2h-1.5v2h1.5ZM19 16.75h2v-1.5h-2v1.5ZM15.75 20A3.25 3.25 0 0 1 19 16.75v-1.5A4.75 4.75 0 0 0 14.25 20h1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFiles);
export default ForwardRef;
