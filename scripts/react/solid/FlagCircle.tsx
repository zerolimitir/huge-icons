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
            d='M12.791 2.062A2.037 2.037 0 0 0 11.349 3.4l-.089.26-.011 7.139c-.008 5.137.001 7.198.034 7.353.159.767 1.269.775 1.433.01.03-.142.044-1.43.044-4.183v-3.977l3.07-.011c2.944-.011 3.076-.014 3.226-.088a.968.968 0 0 0 .563-.907c.001-.261-.006-.278-.619-1.513-.586-1.182-.62-1.262-.62-1.483 0-.221.034-.301.62-1.483.613-1.235.62-1.252.619-1.513a.968.968 0 0 0-.563-.907c-.15-.074-.276-.077-3.096-.084-2.404-.006-2.982.003-3.169.049M9.22 16.147c-1.349.172-2.203.332-3.067.576-1.555.44-2.668 1.091-3.022 1.767-.156.3-.156.72 0 1.018C3.882 20.946 7.633 22 12 22s8.118-1.054 8.869-2.492a1.166 1.166 0 0 0 0-1.018c-.367-.701-1.545-1.367-3.23-1.826a20.288 20.288 0 0 0-3.051-.529l-.342-.026-.014 1.195c-.015 1.187-.016 1.198-.122 1.467-.36.91-1.163 1.469-2.11 1.469-.947 0-1.75-.559-2.11-1.469-.106-.269-.107-.28-.122-1.461l-.014-1.19-.207.006a4.386 4.386 0 0 0-.327.021'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFlagCircle);
export default ForwardRef;
