import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMaximizeCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M15.807 2.287c-.531.119-.722.838-.327 1.233.227.227.342.24 2.132.24h1.568l-4.931 4.931c-4.613 4.613-4.935 4.944-4.991 5.128-.161.536.325 1.048.886.934.193-.04.283-.127 5.146-4.986l4.95-4.947v1.568c0 .994.016 1.644.044 1.774.163.758 1.269.758 1.432 0 .061-.285.061-5.039 0-5.324a.65.65 0 0 0-.196-.358.65.65 0 0 0-.358-.196c-.262-.056-5.102-.053-5.355.003'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMaximizeCircle);
export default ForwardRef;
