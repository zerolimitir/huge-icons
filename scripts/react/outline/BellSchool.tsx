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
            d='M9.84 1.282a9.206 9.206 0 0 0-5.26 2.119 9.24 9.24 0 0 0-3.038 4.813c-.213.838-.278 1.373-.278 2.286s.065 1.448.278 2.286a9.255 9.255 0 0 0 6.672 6.673c.289.073.756.165 1.036.204l.51.07v1.215c0 1.345.006 1.384.251 1.598.227.2.371.229.986.197 2.442-.126 4.655-.885 6.603-2.266a12.75 12.75 0 0 0 2.877-2.877 12.357 12.357 0 0 0 1.786-3.691c.374-1.299.582-3.043.458-3.847A3.28 3.28 0 0 0 20.3 7.357c-.447-.119-1.153-.119-1.6 0a3.269 3.269 0 0 0-2.428 2.785c-.083.653.065 1.35.425 1.998.209.376.787.954 1.163 1.163.859.477 1.787.574 2.659.277.162-.055.3-.1.307-.1.052 0-.418 1.194-.685 1.74a10.728 10.728 0 0 1-8.392 5.955c-.247.028-.462.045-.479.036-.017-.009-.03-.345-.03-.747v-.731l.504-.07a9.354 9.354 0 0 0 4.536-1.943c.399-.318 1.259-1.191 1.529-1.553.227-.304.291-.492.253-.746-.055-.365-.463-.663-.83-.604-.249.039-.388.144-.681.512a7.819 7.819 0 0 1-3.68 2.546 7.975 7.975 0 0 1-3.985.204c-.832-.173-1.867-.597-2.546-1.04a8.127 8.127 0 0 1-2.526-2.627c-1.618-2.749-1.353-6.29.654-8.772.331-.408 1-1.052 1.41-1.356 2.718-2.016 6.393-2.037 9.175-.055.411.293 1.158 1.012 1.499 1.442.292.368.43.472.68.512.367.059.775-.239.83-.604.038-.254-.026-.442-.253-.746-.261-.349-.998-1.106-1.418-1.457-1.203-1.005-2.776-1.726-4.353-1.992-.342-.058-1.456-.15-1.658-.137l-.54.035m.34 6.999A2.23 2.23 0 0 0 8.5 9.494c-.147.298-.259.733-.259 1.006 0 .54.274 1.182.676 1.583.401.402 1.043.676 1.583.676s1.182-.274 1.583-.676c.402-.401.676-1.043.676-1.583 0-.088-.027-.286-.059-.44a2.256 2.256 0 0 0-2.52-1.779m10.074.652c.363.18.662.485.838.857.12.253.128.298.128.71s-.008.457-.128.71a1.828 1.828 0 0 1-.847.861c-.293.145-.313.149-.745.149s-.452-.004-.745-.149a1.828 1.828 0 0 1-.847-.861c-.12-.253-.128-.298-.128-.71s.008-.457.128-.71c.159-.337.462-.662.768-.825.32-.17.483-.204.915-.189.332.012.402.028.663.157m-9.464.889a.61.61 0 0 1 .375.358c.129.282.06.681-.151.868a.918.918 0 0 1-.514.192.918.918 0 0 1-.514-.192c-.113-.1-.224-.366-.225-.539a.9.9 0 0 1 .191-.523c.179-.203.565-.278.838-.164'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBellSchool);
export default ForwardRef;