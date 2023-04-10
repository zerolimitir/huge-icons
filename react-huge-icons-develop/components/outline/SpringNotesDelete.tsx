import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSpringNotesDelete = (
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
            d='M16.75 2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm-6.5-3a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm7.402 6.409a.75.75 0 0 0-1.061-1.06l1.06 1.06Zm-5.304 3.182a.75.75 0 1 0 1.061 1.06l-1.06-1.06Zm4.243 1.06a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-3.182-5.303a.75.75 0 1 0-1.06 1.061l1.06-1.06ZM7 4.25h10v-1.5H7v1.5ZM20.25 7.5V18h1.5V7.5h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 18V7.5h-1.5V18h1.5ZM7 21.25A3.25 3.25 0 0 1 3.75 18h-1.5A4.75 4.75 0 0 0 7 22.75v-1.5ZM20.25 18A3.25 3.25 0 0 1 17 21.25v1.5A4.75 4.75 0 0 0 21.75 18h-1.5ZM17 4.25a3.25 3.25 0 0 1 3.25 3.25h1.5A4.75 4.75 0 0 0 17 2.75v1.5ZM7 2.75A4.75 4.75 0 0 0 2.25 7.5h1.5A3.25 3.25 0 0 1 7 4.25v-1.5ZM15.25 2v3h1.5V2h-1.5Zm-8 0v3h1.5V2h-1.5Zm6.341 8.348-4.243 4.243 1.061 1.06 4.243-4.242-1.061-1.06Zm1.06 4.243-4.242-4.243-1.06 1.061 4.242 4.243 1.06-1.061Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSpringNotesDelete);
export default ForwardRef;
