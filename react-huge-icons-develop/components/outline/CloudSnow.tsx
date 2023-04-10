import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCloudSnow = (
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
            d='M12.975 8.894a.75.75 0 0 0 1.05 1.07l-1.05-1.07Zm2.464-.645.234.712-.234-.712ZM5.124 17.713a.75.75 0 1 0 .752-1.299l-.752 1.299Zm13.151-.657a.75.75 0 1 0 .45 1.43l-.45-1.43ZM2.75 11A6.25 6.25 0 0 1 9 4.75v-1.5A7.75 7.75 0 0 0 1.25 11h1.5ZM17 8.75A4.25 4.25 0 0 1 21.25 13h1.5A5.75 5.75 0 0 0 17 7.25v1.5Zm-2.975 1.215a4.25 4.25 0 0 1 1.648-1.004l-.469-1.425a5.749 5.749 0 0 0-2.229 1.358l1.05 1.07Zm1.648-1.004A4.245 4.245 0 0 1 17 8.75v-1.5c-.626 0-1.23.1-1.796.286l.469 1.425ZM9 4.75a6.252 6.252 0 0 1 5.749 3.794l1.38-.59A7.752 7.752 0 0 0 9 3.25v1.5ZM5.876 16.414A6.247 6.247 0 0 1 2.75 11h-1.5c0 2.87 1.56 5.374 3.874 6.713l.752-1.299ZM21.25 13a4.252 4.252 0 0 1-2.975 4.056l.45 1.43A5.752 5.752 0 0 0 22.75 13h-1.5Zm-8.5 7a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm0-3a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.5 18A.75.75 0 1 1 8 18a.75.75 0 0 1 1.5 0Zm6.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-6.5-3A.75.75 0 1 1 8 15a.75.75 0 0 1 1.5 0Zm6.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudSnow);
export default ForwardRef;
