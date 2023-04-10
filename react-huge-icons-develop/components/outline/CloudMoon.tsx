import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCloudMoon = (
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
            d='M12.975 10.894a.75.75 0 0 0 1.05 1.07l-1.05-1.07Zm2.464-.645.234.712-.234-.712ZM9 19.25A6.25 6.25 0 0 1 2.75 13h-1.5A7.75 7.75 0 0 0 9 20.75v-1.5ZM2.75 13A6.25 6.25 0 0 1 9 6.75v-1.5A7.75 7.75 0 0 0 1.25 13h1.5Zm18.5 2A4.25 4.25 0 0 1 17 19.25v1.5A5.75 5.75 0 0 0 22.75 15h-1.5Zm-7.225-3.035a4.25 4.25 0 0 1 1.648-1.004l-.469-1.425a5.75 5.75 0 0 0-2.229 1.358l1.05 1.07Zm1.648-1.004A4.244 4.244 0 0 1 17 10.75v-1.5c-.626 0-1.23.1-1.796.286l.469 1.425ZM17 19.25H9v1.5h8v-1.5Zm0-14.5A4.25 4.25 0 0 1 21.25 9h1.5A5.75 5.75 0 0 0 17 3.25v1.5Zm-3.863 2.475A4.25 4.25 0 0 1 17 4.75v-1.5a5.75 5.75 0 0 0-5.225 3.348l1.362.627ZM9 6.75c1.123 0 2.175.296 3.085.813l.742-1.304A7.718 7.718 0 0 0 9 5.25v1.5Zm3.085.813a6.277 6.277 0 0 1 2.664 2.98l1.38-.59a7.778 7.778 0 0 0-3.302-3.694l-.742 1.304ZM21.25 9c0 .958-.316 1.84-.85 2.55l1.2.9A5.728 5.728 0 0 0 22.75 9h-1.5ZM17 10.75a4.24 4.24 0 0 1 3.4 1.7l1.2-.9a5.742 5.742 0 0 0-4.6-2.3v1.5Zm3.4 1.7c.534.71.85 1.592.85 2.55h1.5c0-1.294-.428-2.49-1.15-3.45l-1.2.9Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudMoon);
export default ForwardRef;
