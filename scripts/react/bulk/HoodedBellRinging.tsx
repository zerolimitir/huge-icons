import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHoodedBellRinging = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.06 2.894A6.945 6.945 0 0 0 4.193 5.12c-.342.454-.885 1.475-.932 1.753-.09.534.409.99.931.849.27-.073.388-.208.641-.737.322-.674.587-1.053 1.083-1.549a5.082 5.082 0 0 1 1.815-1.2c.368-.144.561-.404.556-.751-.004-.292-.143-.509-.415-.649-.217-.111-.444-.095-.812.058m9.12-.067c-.185.098-.265.179-.345.353a.771.771 0 0 0 .119.833c.035.04.335.205.665.365.335.163.744.398.925.532a5.29 5.29 0 0 1 1.707 2.144c.167.389.287.541.501.635.369.164.794.01.968-.349.121-.249.096-.465-.106-.924a6.808 6.808 0 0 0-3.144-3.301c-.691-.347-1.033-.424-1.29-.288M9.08 19.18c.2.466.641.973 1.112 1.278 1.078.697 2.422.714 3.542.045.485-.289.98-.841 1.186-1.323l.077-.18H9.003l.077.18'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHoodedBellRinging);
export default ForwardRef;
