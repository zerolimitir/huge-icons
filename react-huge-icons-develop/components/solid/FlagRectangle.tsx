import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFlagRectangle = (
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
            d='M9.75 16H7.875A4 4 0 0 0 4.8 17.44l-1.067 1.28C2.648 20.022 3.574 22 5.27 22h13.46c1.696 0 2.622-1.978 1.537-3.28L19.2 17.44A4 4 0 0 0 16.127 16H14.25v1.5a2.25 2.25 0 0 1-4.5 0V16Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M12.75 17.5a.75.75 0 0 1-1.5 0l.005-14a2 2 0 0 1 2-2h5.382a1 1 0 0 1 .894 1.447l-1.053 2.106a1 1 0 0 0 0 .894l1.053 2.106a1 1 0 0 1-.894 1.447H12.75v8Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFlagRectangle);
export default ForwardRef;
