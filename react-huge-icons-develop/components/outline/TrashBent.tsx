import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTrashBent = (
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
            d='M19.748 9.058a.75.75 0 0 0-1.496-.116l1.496.116Zm-1.464 9.249.748.057-.748-.057Zm-12.568 0-.748.057.748-.057Zm.032-9.365a.75.75 0 1 0-1.496.116l1.496-.116ZM20.67 7.674a.75.75 0 0 0 .658-1.348l-.658 1.348Zm-18-1.348a.75.75 0 1 0 .658 1.348L2.67 6.326ZM9.25 5a.75.75 0 0 0 1.5 0h-1.5Zm4 0a.75.75 0 0 0 1.5 0h-1.5Zm-2.5 6a.75.75 0 0 0-1.5 0h1.5Zm-1.5 6a.75.75 0 0 0 1.5 0h-1.5Zm5.5-6a.75.75 0 0 0-1.5 0h1.5Zm-1.5 6a.75.75 0 0 0 1.5 0h-1.5Zm5.002-8.058-.716 9.307 1.496.115.716-9.306-1.496-.116ZM14.296 21.25H9.704v1.5h4.592v-1.5Zm-7.832-3-.716-9.308-1.496.116.716 9.306 1.496-.115Zm3.24 3a3.25 3.25 0 0 1-3.24-3l-1.496.114a4.75 4.75 0 0 0 4.736 4.386v-1.5Zm7.832-3a3.25 3.25 0 0 1-3.24 3v1.5a4.75 4.75 0 0 0 4.736-4.386l-1.496-.115ZM12 5.75c3.204 0 6.18.71 8.671 1.924l.658-1.348C18.624 5.008 15.423 4.25 12 4.25v1.5ZM3.329 7.674C5.82 6.46 8.796 5.75 12 5.75v-1.5c-3.423 0-6.624.758-9.329 2.076l.658 1.348ZM10.75 5V4h-1.5v1h1.5Zm2.5-1v1h1.5V4h-1.5ZM12 2.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 12 1.25v1.5ZM10.75 4c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 9.25 4h1.5Zm-1.5 7v6h1.5v-6h-1.5Zm4 0v6h1.5v-6h-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTrashBent);
export default ForwardRef;
