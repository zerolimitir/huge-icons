import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgChatLove = (
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
            d='m12 10.182-.53.53a.75.75 0 0 0 1.06 0l-.53-.53Zm.265-.265.53.53-.53-.53Zm-.53 0 .53-.53-.53.53Zm-2.652 2.651.53-.53-.53.53Zm1.856 1.857-.53.53.53-.53Zm2.122 0 .53.53-.53-.53Zm1.856-1.857-.53-.53.53.53ZM11 3.75h2v-1.5h-2v1.5ZM2.75 17v-5h-1.5v5h1.5ZM13 20.25H6v1.5h7v-1.5ZM1.25 17A4.75 4.75 0 0 0 6 21.75v-1.5A3.25 3.25 0 0 1 2.75 17h-1.5Zm20-5A8.25 8.25 0 0 1 13 20.25v1.5A9.75 9.75 0 0 0 22.75 12h-1.5ZM13 3.75A8.25 8.25 0 0 1 21.25 12h1.5A9.75 9.75 0 0 0 13 2.25v1.5Zm-2-1.5A9.75 9.75 0 0 0 1.25 12h1.5A8.25 8.25 0 0 1 11 3.75v-1.5Zm1.53 8.462.266-.265-1.061-1.06-.265.265 1.06 1.06Zm-1.325-.265.265.265 1.06-1.06-.265-.266-1.06 1.061ZM8.552 13.1l1.856 1.856 1.06-1.06-1.856-1.857-1.06 1.06Zm5.038 1.856 1.856-1.856-1.06-1.06-1.857 1.855 1.061 1.06Zm.796-4.508c.439.44.439 1.152 0 1.591l1.06 1.06a2.625 2.625 0 0 0 0-3.712l-1.06 1.061Zm1.06-1.06a2.625 2.625 0 0 0-3.712 0l1.06 1.06c.44-.44 1.152-.44 1.591 0l1.061-1.06Zm-5.834 1.06c.44-.44 1.152-.44 1.591 0l1.061-1.06a2.625 2.625 0 0 0-3.712 0l1.06 1.06Zm.796 4.508a2.25 2.25 0 0 0 3.182 0l-1.06-1.06a.75.75 0 0 1-1.061 0l-1.061 1.06Zm-1.855-5.57a2.625 2.625 0 0 0 0 3.713l1.06-1.06a1.125 1.125 0 0 1 0-1.592l-1.06-1.06Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChatLove);
export default ForwardRef;
