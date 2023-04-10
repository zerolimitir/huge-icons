import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgDigitalHealth = (
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
            d='M12 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM9.57 19.845l-3.718-4.598A3.82 3.82 0 0 1 5 12.845v-.173C5 10.644 6.662 9 8.712 9c.985 0 1.93.387 2.625 1.076l.663.655.663-.655A3.733 3.733 0 0 1 15.288 9C17.338 9 19 10.644 19 12.672v.173c0 .873-.3 1.72-.852 2.401l-3.719 4.599c-1.245 1.54-3.613 1.54-4.858 0Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDigitalHealth);
export default ForwardRef;
