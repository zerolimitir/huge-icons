import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCloudFlash = (
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
            d='M12.975 7.894a.75.75 0 0 0 1.05 1.07l-1.05-1.07Zm2.464-.645.234.712-.234-.712Zm3.686 8.433a.75.75 0 1 0 .75 1.298l-.75-1.298Zm-14 1.03a.75.75 0 1 0 .75-1.298l-.75 1.299ZM13 11h.75a.75.75 0 0 0-1.326-.48L13 11Zm-5 6-.576-.48A.75.75 0 0 0 8 17.75V17Zm3 0h.75a.75.75 0 0 0-.75-.75V17Zm0 4h-.75a.75.75 0 0 0 1.326.48L11 21Zm5-6 .576.48A.75.75 0 0 0 16 14.25V15Zm-3 0h-.75c0 .414.336.75.75.75V15ZM2.75 10A6.25 6.25 0 0 1 9 3.75v-1.5A7.75 7.75 0 0 0 1.25 10h1.5ZM17 7.75A4.25 4.25 0 0 1 21.25 12h1.5A5.75 5.75 0 0 0 17 6.25v1.5Zm-2.975 1.215a4.25 4.25 0 0 1 1.648-1.004l-.469-1.425a5.749 5.749 0 0 0-2.229 1.358l1.05 1.07Zm1.648-1.004A4.245 4.245 0 0 1 17 7.75v-1.5c-.626 0-1.23.1-1.796.286l.469 1.425ZM9 3.75a6.252 6.252 0 0 1 5.749 3.794l1.38-.59A7.752 7.752 0 0 0 9 2.25v1.5ZM21.25 12a4.248 4.248 0 0 1-2.125 3.682l.75 1.298A5.748 5.748 0 0 0 22.75 12h-1.5ZM5.876 15.414A6.247 6.247 0 0 1 2.75 10h-1.5c0 2.87 1.56 5.374 3.874 6.713l.752-1.299Zm6.548-4.894-5 6 1.152.96 5-6-1.152-.96ZM8 17.75h3v-1.5H8v1.5Zm2.25-.75v4h1.5v-4h-1.5Zm1.326 4.48 5-6-1.152-.96-5 6 1.152.96ZM16 14.25h-3v1.5h3v-1.5Zm-2.25.75v-4h-1.5v4h1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudFlash);
export default ForwardRef;
