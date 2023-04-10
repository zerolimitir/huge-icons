import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCloudWind = (
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
            d='M17 15.25a.75.75 0 0 0 0 1.5v-1.5Zm-4.025-8.356a.75.75 0 0 0 1.05 1.07l-1.05-1.07Zm2.464-.645.234.712-.234-.712ZM11 12.25a.75.75 0 0 0 0 1.5v-1.5Zm1 6a.75.75 0 0 0 0 1.5v-1.5Zm6 3a.75.75 0 0 0 0 1.5v-1.5Zm-9-1.5a.75.75 0 0 0 0-1.5v1.5Zm-2-1.5a.75.75 0 0 0 0 1.5v-1.5Zm2-3A6.25 6.25 0 0 1 2.75 9h-1.5A7.75 7.75 0 0 0 9 16.75v-1.5ZM2.75 9A6.25 6.25 0 0 1 9 2.75v-1.5A7.75 7.75 0 0 0 1.25 9h1.5Zm18.5 2A4.25 4.25 0 0 1 17 15.25v1.5A5.75 5.75 0 0 0 22.75 11h-1.5ZM17 6.75A4.25 4.25 0 0 1 21.25 11h1.5A5.75 5.75 0 0 0 17 5.25v1.5Zm-2.975 1.215a4.25 4.25 0 0 1 1.648-1.004l-.469-1.425a5.749 5.749 0 0 0-2.229 1.358l1.05 1.07Zm1.648-1.004A4.245 4.245 0 0 1 17 6.75v-1.5c-.626 0-1.23.1-1.796.286l.469 1.425ZM9 2.75a6.252 6.252 0 0 1 5.749 3.794l1.38-.59A7.752 7.752 0 0 0 9 1.25v1.5Zm0 14h2.5v-1.5H9v1.5Zm2.5-4.5H11v1.5h.5v-1.5Zm2.25 2.25a2.25 2.25 0 0 0-2.25-2.25v1.5a.75.75 0 0 1 .75.75h1.5Zm-2.25 2.25a2.25 2.25 0 0 0 2.25-2.25h-1.5a.75.75 0 0 1-.75.75v1.5Zm.5 3h6.5v-1.5H12v1.5Zm6.5 1.5H18v1.5h.5v-1.5Zm.75-.75a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25h-1.5Zm-.75-.75a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25v1.5ZM9 18.25H7v1.5h2v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudWind);
export default ForwardRef;
