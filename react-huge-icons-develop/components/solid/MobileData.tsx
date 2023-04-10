import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMobileData = (
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
            d='M15.116 5.944a1.26 1.26 0 0 1 .134-.116V14a.75.75 0 0 0 1.5 0V5.828c.047.035.091.074.134.116L18.47 7.53a.75.75 0 1 0 1.06-1.06l-1.585-1.586a2.75 2.75 0 0 0-3.89 0L12.47 6.469a.75.75 0 0 0 1.06 1.061l1.586-1.586ZM8.884 18.055a1.27 1.27 0 0 1-.134.117V10a.75.75 0 0 0-1.5 0v8.172a1.27 1.27 0 0 1-.134-.117L5.53 16.47a.75.75 0 0 0-1.06 1.06l1.585 1.586a2.75 2.75 0 0 0 3.89 0l1.585-1.586a.75.75 0 1 0-1.06-1.06l-1.586 1.585Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMobileData);
export default ForwardRef;
