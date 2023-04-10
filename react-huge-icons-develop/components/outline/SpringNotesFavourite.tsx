import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSpringNotesFavourite = (
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
            d='M16.75 2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm-6.5-3a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5ZM12 10.94l-.53.53a.75.75 0 0 0 1.06 0l-.53-.53Zm.265-.266.53.53-.53-.53Zm-.53 0-.53.53.53-.53Zm-2.652 2.652.53-.53-.53.53Zm1.856 1.856-.53.53.53-.53ZM7 4.25h10v-1.5H7v1.5ZM20.25 7.5V18h1.5V7.5h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 18V7.5h-1.5V18h1.5ZM7 21.25A3.25 3.25 0 0 1 3.75 18h-1.5A4.75 4.75 0 0 0 7 22.75v-1.5ZM20.25 18A3.25 3.25 0 0 1 17 21.25v1.5A4.75 4.75 0 0 0 21.75 18h-1.5ZM17 4.25a3.25 3.25 0 0 1 3.25 3.25h1.5A4.75 4.75 0 0 0 17 2.75v1.5ZM7 2.75A4.75 4.75 0 0 0 2.25 7.5h1.5A3.25 3.25 0 0 1 7 4.25v-1.5ZM15.25 2v3h1.5V2h-1.5Zm-8 0v3h1.5V2h-1.5Zm5.28 9.47.265-.266-1.06-1.06-.265.265 1.06 1.06Zm-1.326-.266.266.266 1.06-1.061-.265-.265-1.06 1.06Zm-2.651 2.652 1.856 1.856 1.06-1.06-1.856-1.856-1.06 1.06Zm5.038 1.856 1.856-1.856-1.06-1.06-1.857 1.856 1.06 1.06Zm.795-4.508c.44.44.44 1.152 0 1.591l1.061 1.061a2.625 2.625 0 0 0 0-3.712l-1.06 1.06Zm1.061-1.06a2.625 2.625 0 0 0-3.712 0l1.06 1.06a1.126 1.126 0 0 1 1.591 0l1.061-1.06Zm-5.834 1.06a1.126 1.126 0 0 1 1.591 0l1.061-1.06a2.625 2.625 0 0 0-3.712 0l1.06 1.06Zm.796 4.508a2.25 2.25 0 0 0 3.182 0l-1.06-1.06a.75.75 0 0 1-1.061 0l-1.061 1.06Zm-1.856-5.568a2.625 2.625 0 0 0 0 3.712l1.06-1.06a1.125 1.125 0 0 1 0-1.591l-1.06-1.061Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSpringNotesFavourite);
export default ForwardRef;
