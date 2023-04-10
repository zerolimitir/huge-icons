import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSun = (
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
            d='M12.75 2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 1a.75.75 0 0 0 1.5 0h-1.5Zm1.5 18a.75.75 0 0 0-1.5 0h1.5Zm-1.5 1a.75.75 0 0 0 1.5 0h-1.5Zm8.351-16.54a.75.75 0 1 0-1.06-1.061l1.06 1.06Zm-1.767-.354a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM6.166 18.894a.75.75 0 0 0-1.06-1.06l1.06 1.06ZM4.4 18.541a.75.75 0 0 0 1.06 1.06l-1.06-1.06ZM22 12.75a.75.75 0 0 0 0-1.5v1.5Zm-1-1.5a.75.75 0 0 0 0 1.5v-1.5Zm-18 1.5a.75.75 0 0 0 0-1.5v1.5Zm-1-1.5a.75.75 0 0 0 0 1.5v-1.5Zm16.54 8.351a.75.75 0 0 0 1.061-1.06l-1.06 1.06Zm.354-1.767a.75.75 0 0 0-1.06 1.06l1.06-1.06ZM5.106 6.166a.75.75 0 0 0 1.06-1.06l-1.06 1.06ZM5.459 4.4a.75.75 0 0 0-1.06 1.06l1.06-1.06ZM17.25 12c0 2.9-2.35 5.25-5.25 5.25v1.5A6.75 6.75 0 0 0 18.75 12h-1.5ZM12 17.25A5.25 5.25 0 0 1 6.75 12h-1.5A6.75 6.75 0 0 0 12 18.75v-1.5ZM6.75 12c0-2.9 2.35-5.25 5.25-5.25v-1.5A6.75 6.75 0 0 0 5.25 12h1.5ZM12 6.75c2.9 0 5.25 2.35 5.25 5.25h1.5A6.75 6.75 0 0 0 12 5.25v1.5ZM11.25 2v1h1.5V2h-1.5Zm0 19v1h1.5v-1h-1.5Zm7.29-16.601-.706.707 1.06 1.06.707-.707-1.06-1.06ZM5.107 17.834l-.707.707 1.06 1.06.707-.707-1.06-1.06ZM22 11.25h-1v1.5h1v-1.5Zm-19 0H2v1.5h1v-1.5Zm16.601 7.29-.707-.706-1.06 1.06.707.707 1.06-1.06ZM6.166 5.107 5.459 4.4l-1.06 1.06.707.707 1.06-1.06Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSun);
export default ForwardRef;
