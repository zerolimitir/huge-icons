import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFlagCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M12.791 2.062A2.037 2.037 0 0 0 11.349 3.4l-.089.26-.011 7.139c-.008 5.137.001 7.198.034 7.353.159.767 1.269.775 1.433.01.03-.142.044-1.43.044-4.183v-3.977l3.07-.011c2.944-.011 3.076-.014 3.226-.088a.968.968 0 0 0 .563-.907c.001-.261-.006-.278-.619-1.513-.586-1.182-.62-1.262-.62-1.483 0-.221.034-.301.62-1.483.613-1.235.62-1.252.619-1.513a.968.968 0 0 0-.563-.907c-.15-.074-.276-.077-3.096-.084-2.404-.006-2.982.003-3.169.049'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFlagCircle);
export default ForwardRef;
