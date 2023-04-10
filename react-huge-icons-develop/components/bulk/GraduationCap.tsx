import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgGraduationCap = (
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
            d='M7.34 12.094v4.732a2 2 0 0 0 2 2h5.32a2 2 0 0 0 2-2v-4.732l-3.24 1.44a3.496 3.496 0 0 1-2.84 0l-3.24-1.44ZM19.573 10.8v5.114a.874.874 0 1 0 1.748 0v-5.892a.575.575 0 0 1-.033.016l-1.715.762Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='m2.711 8.973 7.87-3.498a3.496 3.496 0 0 1 2.839 0l7.869 3.498a.583.583 0 0 1 0 1.064l-7.87 3.498a3.496 3.496 0 0 1-2.839 0l-7.869-3.498a.583.583 0 0 1 0-1.064Z'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgGraduationCap);
export default ForwardRef;
