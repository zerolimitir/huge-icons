import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgAccessibility = (
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
            d='M13.5 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM13 21a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M5.18 5.272a.75.75 0 0 0-.36 1.456c1.944.48 3.597.793 5.18.935v4.29l-.744 5.954a.75.75 0 1 0 1.488.186L11.506 12h.988l.762 6.093a.75.75 0 0 0 1.488-.186L14 11.955V7.65c1.564-.147 3.221-.457 5.173-.92a.75.75 0 0 0-.346-1.46c-2.773.659-4.854.98-6.894.98-2.038.001-4.073-.317-6.754-.978Z'
            clipRule='evenodd'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAccessibility);
export default ForwardRef;
