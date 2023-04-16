import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPixelGridCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M4.842 1.285a4.098 4.098 0 0 0-2.45 1.229A4.075 4.075 0 0 0 1.374 4.34c-.093.349-.106.476-.106 1 .001.515.016.655.104.988.114.43.34.939.562 1.266l.146.214-.238.706c-.431 1.282-.578 2.169-.577 3.486.001 1.325.147 2.209.577 3.486l.238.706-.146.214a4.58 4.58 0 0 0-.563 1.266c-.089.335-.103.47-.103.988 0 .52.014.654.105 1a4.126 4.126 0 0 0 2.967 2.966c.349.093.476.106 1 .106.515-.001.655-.016.988-.104.43-.114.939-.34 1.266-.562l.214-.146.706.238c1.279.43 2.164.577 3.486.577s2.207-.147 3.486-.577l.706-.238.214.146c.327.222.836.448 1.266.562.333.088.473.103.988.104.52 0 .652-.013.988-.103 1.208-.322 2.141-1.079 2.676-2.17.108-.22.244-.58.302-.8.093-.349.106-.475.106-.999-.001-.515-.016-.655-.104-.988a4.575 4.575 0 0 0-.562-1.266l-.146-.214.238-.706c.431-1.282.578-2.169.577-3.486-.001-1.325-.147-2.209-.577-3.486l-.238-.706.146-.214c.222-.327.448-.836.562-1.266.088-.333.103-.473.104-.988 0-.522-.013-.652-.105-1-.646-2.454-3.243-3.73-5.59-2.745-.167.07-.428.209-.58.31-.256.169-.286.179-.397.136a12.392 12.392 0 0 0-2.9-.723c-.54-.06-1.78-.06-2.32 0-.888.097-2.014.378-2.9.723-.111.043-.141.033-.397-.136A4.132 4.132 0 0 0 5.76 1.28c-.385-.044-.498-.044-.918.005m1.278 1.59c1.306.416 2.079 1.864 1.695 3.173-.193.657-.736 1.302-1.339 1.591a2.529 2.529 0 0 1-1.945.143 2.612 2.612 0 0 1-1.655-1.661 2.945 2.945 0 0 1-.058-1.336 2.613 2.613 0 0 1 1.871-1.947c.38-.103 1.044-.086 1.431.037m6.806-.073c.228.024.593.077.812.12.41.079 1.248.3 1.33.35.032.02.005.113-.089.308a4.097 4.097 0 0 0 .003 3.494 4.058 4.058 0 0 0 3.323 2.32 4.151 4.151 0 0 0 2.107-.372c.201-.096.295-.123.315-.09.051.081.272.919.351 1.33a9.404 9.404 0 0 1 0 3.476c-.081.421-.301 1.249-.353 1.334-.024.038-.114.011-.368-.11-.583-.279-.871-.337-1.677-.338-.604-.001-.747.011-1.04.089a4.394 4.394 0 0 0-1.903 1.117c-1.172 1.194-1.482 3.065-.759 4.582.093.196.122.296.091.315-.095.058-1.094.319-1.54.401-.405.075-.613.087-1.529.087-.916 0-1.124-.012-1.529-.087-.446-.082-1.445-.343-1.54-.401-.031-.019-.002-.119.091-.315.725-1.521.41-3.403-.768-4.588a4.081 4.081 0 0 0-1.154-.826c-.54-.262-.956-.364-1.591-.389-.757-.029-1.328.082-1.927.375-.205.101-.285.123-.308.087-.051-.084-.272-.916-.352-1.333a9.404 9.404 0 0 1 0-3.476c.079-.411.3-1.249.351-1.33.02-.033.114-.006.315.09a4.097 4.097 0 0 0 3.486-.004c1.557-.736 2.465-2.326 2.32-4.06-.044-.528-.216-1.087-.505-1.645-.008-.016.127-.072.299-.126a11.113 11.113 0 0 1 2.012-.401 14.085 14.085 0 0 1 1.726.016m6.37.037a2.593 2.593 0 0 1 1.886 1.946c.086.384.061.958-.058 1.336a2.612 2.612 0 0 1-1.655 1.661 2.529 2.529 0 0 1-1.945-.143c-.612-.294-1.141-.928-1.349-1.619-.052-.174-.072-.367-.071-.7.002-.394.018-.506.112-.78a2.591 2.591 0 0 1 1.397-1.562c.486-.223 1.144-.277 1.683-.139M6.04 16.183c.827.245 1.532.954 1.785 1.797.099.329.099 1.031 0 1.358-.297.985-1.041 1.672-2.019 1.864-.336.066-.957.028-1.257-.077-.665-.234-1.21-.697-1.499-1.274-.403-.806-.381-1.738.059-2.489a2.679 2.679 0 0 1 1.784-1.241c.28-.05.878-.018 1.147.062m13.32 0c.932.279 1.628 1.015 1.821 1.924a2.59 2.59 0 0 1-1.964 3.075 2.928 2.928 0 0 1-1.337-.057c-.775-.248-1.387-.861-1.664-1.665-.094-.275-.11-.385-.112-.78-.001-.333.019-.526.071-.7.282-.937 1.108-1.693 2.03-1.858.289-.051.884-.02 1.155.061'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPixelGridCircle);
export default ForwardRef;