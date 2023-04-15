import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgAirPlane = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M11.48 2.062c-.881.19-1.633.95-1.82 1.838-.05.239-.059 1.194-.059 6.582-.001 6.927.013 6.518-.244 6.995-.066.123-.577.841-1.134 1.597-.58.787-1.032 1.439-1.058 1.525-.246.822.584 1.596 1.455 1.356.088-.024.654-.268 1.257-.541 1.501-.681 1.467-.671 2.123-.671.656 0 .622-.01 2.123.671.603.273 1.169.517 1.257.541.37.102.779.015 1.092-.233a1.03 1.03 0 0 0 .363-1.123c-.026-.086-.478-.738-1.058-1.525-.557-.756-1.068-1.474-1.134-1.597-.257-.477-.243-.068-.244-6.995 0-6.982.014-6.592-.264-7.162-.2-.408-.644-.851-1.058-1.055a2.408 2.408 0 0 0-1.597-.203'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAirPlane);
export default ForwardRef;
