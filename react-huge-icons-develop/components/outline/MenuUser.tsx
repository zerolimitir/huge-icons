import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMenuUser = (
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
            d='M14 11.25a.75.75 0 0 0 0 1.5v-1.5Zm8 1.5a.75.75 0 0 0 0-1.5v1.5Zm-8-6.5a.75.75 0 0 0 0 1.5v-1.5Zm8 1.5a.75.75 0 0 0 0-1.5v1.5Zm-6 8.5a.75.75 0 0 0 0 1.5v-1.5Zm6 1.5a.75.75 0 0 0 0-1.5v1.5Zm-8-5h8v-1.5h-8v1.5Zm0-5h8v-1.5h-8v1.5Zm2 10h6v-1.5h-6v1.5ZM9.25 8A2.25 2.25 0 0 1 7 10.25v1.5A3.75 3.75 0 0 0 10.75 8h-1.5ZM7 10.25A2.25 2.25 0 0 1 4.75 8h-1.5A3.75 3.75 0 0 0 7 11.75v-1.5ZM4.75 8A2.25 2.25 0 0 1 7 5.75v-1.5A3.75 3.75 0 0 0 3.25 8h1.5ZM7 5.75A2.25 2.25 0 0 1 9.25 8h1.5A3.75 3.75 0 0 0 7 4.25v1.5ZM11.25 16c0 .462-.316 1.007-1.1 1.478-.77.462-1.882.772-3.15.772v1.5c1.493 0 2.881-.362 3.921-.986 1.025-.615 1.829-1.569 1.829-2.764h-1.5ZM7 18.25c-1.268 0-2.38-.31-3.15-.772-.784-.47-1.1-1.017-1.1-1.478h-1.5c0 1.195.804 2.15 1.829 2.764 1.04.624 2.428.986 3.921.986v-1.5ZM2.75 16c0-.461.316-1.007 1.1-1.478.77-.462 1.882-.772 3.15-.772v-1.5c-1.493 0-2.881.362-3.921.986C2.054 13.85 1.25 14.805 1.25 16h1.5ZM7 13.75c1.268 0 2.38.31 3.15.772.784.47 1.1 1.017 1.1 1.478h1.5c0-1.195-.804-2.15-1.829-2.764-1.04-.624-2.428-.986-3.921-.986v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMenuUser);
export default ForwardRef;
