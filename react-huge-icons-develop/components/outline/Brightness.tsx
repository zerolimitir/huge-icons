import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBrightness = (
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
            d='M12.75 2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 1a.75.75 0 0 0 1.5 0h-1.5Zm1.5 18a.75.75 0 0 0-1.5 0h1.5Zm-1.5 1a.75.75 0 0 0 1.5 0h-1.5Zm9.785-14.35a.75.75 0 1 0-.75-1.3l.75 1.3Zm-1.616-.8a.75.75 0 0 0 .75 1.3l-.75-1.3ZM4.581 17.15a.75.75 0 1 0-.75-1.3l.75 1.3Zm-1.616-.8a.75.75 0 1 0 .75 1.3l-.75-1.3Zm.75-10a.75.75 0 1 0-.75 1.3l.75-1.3Zm.116 1.8a.75.75 0 1 0 .75-1.3l-.75 1.3Zm16.338 7.7a.75.75 0 0 0-.75 1.3l.75-1.3Zm.116 1.8a.75.75 0 0 0 .75-1.3l-.75 1.3ZM17.25 12c0 2.9-2.35 5.25-5.25 5.25v1.5A6.75 6.75 0 0 0 18.75 12h-1.5ZM12 17.25A5.25 5.25 0 0 1 6.75 12h-1.5A6.75 6.75 0 0 0 12 18.75v-1.5ZM6.75 12c0-2.9 2.35-5.25 5.25-5.25v-1.5A6.75 6.75 0 0 0 5.25 12h1.5ZM12 6.75c2.9 0 5.25 2.35 5.25 5.25h1.5A6.75 6.75 0 0 0 12 5.25v1.5ZM11.25 2v1h1.5V2h-1.5Zm0 19v1h1.5v-1h-1.5Zm9.035-14.65-.866.5.75 1.3.866-.5-.75-1.3Zm-16.454 9.5-.866.5.75 1.3.866-.5-.75-1.3Zm-.866-8.2.866.5.75-1.3-.866-.5-.75 1.3Zm16.454 9.5.866.5.75-1.3-.866-.5-.75 1.3Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBrightness);
export default ForwardRef;
