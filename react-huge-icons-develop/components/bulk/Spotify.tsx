import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSpotify = (
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
        <circle cx={12} cy={12} r={10} fill='currentColor' opacity={0.4} />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M11.546 9.124c-2.184-.122-4.16.13-5.267.572a.75.75 0 0 1-.557-1.392c1.393-.558 3.616-.806 5.907-.678 2.302.129 4.8.644 6.735 1.718a.75.75 0 1 1-.728 1.312c-1.665-.925-3.916-1.41-6.09-1.532ZM11 12.312c-1.907-.06-3.548.185-4.285.407a.75.75 0 0 1-.431-1.437c.93-.28 2.738-.533 4.764-.469 2.027.064 4.37.45 6.315 1.531a.75.75 0 1 1-.728 1.312c-1.654-.92-3.729-1.283-5.635-1.344Zm4.635 4.344c-3.361-1.868-7.367-1.403-8.92-.937a.75.75 0 0 1-.431-1.437c1.78-.534 6.24-1.07 10.08 1.063a.75.75 0 1 1-.729 1.31Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSpotify);
export default ForwardRef;
