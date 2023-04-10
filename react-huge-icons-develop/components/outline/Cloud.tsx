import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCloud = (
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
            d='M12.975 9.894a.75.75 0 0 0 1.05 1.07l-1.05-1.07Zm2.464-.645.234.712-.234-.712ZM9 18.25A6.25 6.25 0 0 1 2.75 12h-1.5A7.75 7.75 0 0 0 9 19.75v-1.5ZM2.75 12A6.25 6.25 0 0 1 9 5.75v-1.5A7.75 7.75 0 0 0 1.25 12h1.5Zm18.5 2A4.25 4.25 0 0 1 17 18.25v1.5A5.75 5.75 0 0 0 22.75 14h-1.5ZM17 9.75A4.25 4.25 0 0 1 21.25 14h1.5A5.75 5.75 0 0 0 17 8.25v1.5Zm-2.975 1.215a4.25 4.25 0 0 1 1.648-1.004l-.469-1.425a5.749 5.749 0 0 0-2.229 1.358l1.05 1.07Zm1.648-1.004A4.245 4.245 0 0 1 17 9.75v-1.5c-.626 0-1.23.1-1.796.286l.469 1.425ZM9 5.75a6.252 6.252 0 0 1 5.749 3.794l1.38-.59A7.752 7.752 0 0 0 9 4.25v1.5Zm8 12.5H9v1.5h8v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloud);
export default ForwardRef;
