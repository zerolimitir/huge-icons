import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCloudWindRain = (
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
            d='M12.975 7.894a.75.75 0 0 0 1.05 1.07l-1.05-1.07Zm2.464-.645.234.712-.234-.712Zm3.26 8.648a.75.75 0 0 0 .601 1.374l-.6-1.374Zm-14.128.463a.75.75 0 1 0 .858-1.23l-.858 1.23Zm4.1-.025a.75.75 0 1 0-1.342-.67l1.342.67Zm-2.342 1.33a.75.75 0 1 0 1.342.67l-1.342-.67Zm10.342-1.33a.75.75 0 1 0-1.342-.67l1.342.67Zm-2.342 1.33a.75.75 0 1 0 1.342.67l-1.342-.67Zm-1.633-1.386a.75.75 0 0 0-1.392-.557l1.392.557ZM9.304 20.72a.75.75 0 0 0 1.392.558l-1.392-.558ZM2.75 10A6.25 6.25 0 0 1 9 3.75v-1.5A7.75 7.75 0 0 0 1.25 10h1.5ZM17 7.75A4.25 4.25 0 0 1 21.25 12h1.5A5.75 5.75 0 0 0 17 6.25v1.5Zm-2.975 1.215a4.25 4.25 0 0 1 1.648-1.004l-.469-1.425a5.749 5.749 0 0 0-2.229 1.358l1.05 1.07Zm1.648-1.004A4.245 4.245 0 0 1 17 7.75v-1.5c-.626 0-1.23.1-1.796.286l.469 1.425ZM9 3.75a6.252 6.252 0 0 1 5.749 3.794l1.38-.59A7.752 7.752 0 0 0 9 2.25v1.5ZM21.25 12a4.251 4.251 0 0 1-2.55 3.897l.6 1.374A5.751 5.751 0 0 0 22.75 12h-1.5ZM5.43 15.13A6.242 6.242 0 0 1 2.75 10h-1.5a7.742 7.742 0 0 0 3.32 6.36l.86-1.23Zm1.9.535-1 2 1.34.67 1-2-1.34-.67Zm8 0-1 2 1.34.67 1-2-1.34-.67Zm-4.026.057-2 5 1.392.556 2-5-1.392-.556Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudWindRain);
export default ForwardRef;
