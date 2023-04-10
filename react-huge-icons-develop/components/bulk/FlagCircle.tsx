import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFlagCircle = (
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
            d='M9.75 16.095C5.87 16.427 3 17.602 3 19c0 1.657 4.03 3 9 3s9-1.343 9-3c0-1.398-2.868-2.572-6.75-2.905V18a2.25 2.25 0 1 1-4.5 0v-1.905Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M12.75 18a.75.75 0 0 1-1.5 0l.005-14a2 2 0 0 1 2-2h5.382a1 1 0 0 1 .894 1.447l-1.053 2.106a1 1 0 0 0 0 .894l1.053 2.106A1 1 0 0 1 18.637 10H12.75v8Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFlagCircle);
export default ForwardRef;
