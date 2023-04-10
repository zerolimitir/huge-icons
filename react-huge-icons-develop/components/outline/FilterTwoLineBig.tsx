import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFilterTwoLineBig = (
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
            d='M3 6.25a.75.75 0 0 0 0 1.5v-1.5Zm5 1.5a.75.75 0 0 0 0-1.5v1.5Zm13 0a.75.75 0 0 0 0-1.5v1.5Zm-5 8.5a.75.75 0 0 0 0 1.5v-1.5Zm5 1.5a.75.75 0 0 0 0-1.5v1.5Zm-18-1.5a.75.75 0 0 0 0 1.5v-1.5ZM14 4v.75V4Zm2 0v-.75V4Zm0 6v-.75.75Zm-2 0v.75V10Zm-6 4v.75V14Zm2 0v-.75.75Zm0 6v-.75.75Zm-2 0v.75V20ZM3 7.75h5v-1.5H3v1.5Zm16 0h2v-1.5h-2v1.5Zm-3 10h5v-1.5h-5v1.5Zm-13 0h2v-1.5H3v1.5Zm11-13h2v-1.5h-2v1.5Zm2 4.5h-2v1.5h2v-1.5Zm-2 0A2.25 2.25 0 0 1 11.75 7h-1.5A3.75 3.75 0 0 0 14 10.75v-1.5ZM18.25 7A2.25 2.25 0 0 1 16 9.25v1.5A3.75 3.75 0 0 0 19.75 7h-1.5ZM16 4.75A2.25 2.25 0 0 1 18.25 7h1.5A3.75 3.75 0 0 0 16 3.25v1.5Zm-2-1.5A3.75 3.75 0 0 0 10.25 7h1.5A2.25 2.25 0 0 1 14 4.75v-1.5Zm-6 11.5h2v-1.5H8v1.5Zm2 4.5H8v1.5h2v-1.5Zm-2 0A2.25 2.25 0 0 1 5.75 17h-1.5A3.75 3.75 0 0 0 8 20.75v-1.5ZM12.25 17A2.25 2.25 0 0 1 10 19.25v1.5A3.75 3.75 0 0 0 13.75 17h-1.5ZM10 14.75A2.25 2.25 0 0 1 12.25 17h1.5A3.75 3.75 0 0 0 10 13.25v1.5Zm-2-1.5A3.75 3.75 0 0 0 4.25 17h1.5A2.25 2.25 0 0 1 8 14.75v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFilterTwoLineBig);
export default ForwardRef;
