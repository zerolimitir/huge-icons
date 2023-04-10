import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLocationShare = (
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
            d='M19 11c0 4.418-4.5 9-7 9s-7-4.582-7-9 3.134-7 7-7 7 2.582 7 7Zm-4.5 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM3.715 6.341a.75.75 0 1 0-1.336-.682C1.65 7.085 1.25 8.754 1.25 10.625c0 1.23.242 2.452.65 3.622a.75.75 0 1 0 1.417-.494c-.363-1.04-.567-2.095-.567-3.128 0-1.654.353-3.086.965-4.284Zm17.906-.682a.75.75 0 1 0-1.336.682c.612 1.198.965 2.63.965 4.284 0 1.033-.204 2.088-.567 3.128a.75.75 0 1 0 1.416.494c.409-1.17.651-2.393.651-3.622 0-1.871-.4-3.54-1.129-4.966Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLocationShare);
export default ForwardRef;
