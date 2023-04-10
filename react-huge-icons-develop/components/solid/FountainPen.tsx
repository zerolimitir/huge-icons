import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFountainPen = (
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
            d='M7 6h10a2 2 0 1 0 0-4H7a2 2 0 1 0 0 4Zm-1.722 5.328 1.242-3.86c.157.02.317.032.48.032h10c.163 0 .323-.011.48-.033l1.242 3.861a3.945 3.945 0 0 1-.474 3.769l-5.296 6.43a1.097 1.097 0 0 1-.202.214v-7.886a2 2 0 1 0-1.5 0v7.886a1.097 1.097 0 0 1-.202-.215l-5.296-6.43a3.945 3.945 0 0 1-.474-3.768Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFountainPen);
export default ForwardRef;
