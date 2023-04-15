import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgArrowThickUp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}
    />
);
const ForwardRef = forwardRef(SvgArrowThickUp);
export default ForwardRef;
