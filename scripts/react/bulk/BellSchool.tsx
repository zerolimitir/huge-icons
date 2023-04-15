import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBellSchool = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M19.728 8.058c-.733.168-1.385.671-1.703 1.315a2.495 2.495 0 0 0 1.639 3.548c.344.088.748.101 1.057.035.112-.024.214-.035.225-.024.011.012-.025.189-.08.394-.429 1.606-1.353 3.269-2.484 4.474-1.67 1.779-3.766 2.911-6.105 3.295-.339.056-.707.107-.817.112l-.2.01-.011-1.118-.01-1.119H9.76v1.591c0 1.757 0 1.755.251 1.975.227.2.371.229.986.197 4.148-.214 7.792-2.355 9.945-5.843a12.542 12.542 0 0 0 1.736-5.08c.076-.704.095-1.433.045-1.722a2.547 2.547 0 0 0-1.763-1.995c-.311-.094-.921-.116-1.232-.045m-9.715.999c-.76.184-1.381.873-1.492 1.655A2.007 2.007 0 0 0 10.5 13c1.474 0 2.436-1.54 1.795-2.872a2.011 2.011 0 0 0-2.282-1.071'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBellSchool);
export default ForwardRef;
