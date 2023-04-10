import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgNetflix = (
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
            fillRule='evenodd'
            d='M4 3h5l11 17h-5L4 3Zm0 2.761V20h5v-6.511L4 5.76ZM20 3v14.239l-5-7.727V3h5Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgNetflix);
export default ForwardRef;
