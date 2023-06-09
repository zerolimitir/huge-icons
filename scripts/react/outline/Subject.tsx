import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSubject = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='#000'
            fillRule='evenodd'
            d='M5.815 5.278c-.484.115-.717.726-.432 1.13a.939.939 0 0 0 .277.248c.16.084.162.084 6.22.095 4.313.007 6.122-.002 6.274-.034.748-.155.775-1.244.035-1.431-.21-.053-12.154-.06-12.374-.008m0 4c-.484.115-.717.726-.432 1.13a.939.939 0 0 0 .277.248c.16.084.162.084 6.22.095 4.313.007 6.122-.002 6.274-.034.748-.155.775-1.244.035-1.431-.21-.053-12.154-.06-12.374-.008m0 4c-.484.115-.717.726-.432 1.13a.939.939 0 0 0 .277.248c.16.084.162.084 6.22.095 4.313.007 6.122-.002 6.274-.034.748-.155.775-1.244.035-1.431-.21-.053-12.154-.06-12.374-.008m0 4c-.484.115-.717.726-.432 1.13a.939.939 0 0 0 .277.248c.158.083.205.084 3.218.095 2.142.008 3.122-.002 3.273-.033.751-.156.78-1.245.038-1.432-.21-.052-6.156-.06-6.374-.008'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSubject);
export default ForwardRef;
