import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgDeliveryParachute = (
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
            d='M12 5.25a.75.75 0 0 1 .75.75v6.446a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75ZM4.584 6.376a.75.75 0 0 1 1.04.208l4 6a.75.75 0 1 1-1.248.832l-4-6a.75.75 0 0 1 .208-1.04Zm14.832 0a.75.75 0 0 1 .208 1.04l-4 6a.75.75 0 1 1-1.248-.832l4-6a.75.75 0 0 1 1.04-.208Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M12 2C7.582 2 4 4.686 4 8c0-1.105 1.79-2 4-2s4 .895 4 2c0-1.105 1.79-2 4-2s3.883.972 4 2c0-3.314-3.582-6-8-6Z'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M9 12a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H9Zm4 2.75a.75.75 0 0 0 0-1.5h-2a.75.75 0 0 0 0 1.5h2Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDeliveryParachute);
export default ForwardRef;
