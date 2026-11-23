#!/usr/bin/env bash
# Usage: media.sh  (run from project root). Builds web-ready copies of assets/ and slides/ into media/.
set -u
img() { # src dest(without ext)
  mkdir -p "$(dirname "$2")"
  ffmpeg -loglevel error -y -i "$1" -vf "scale='if(gt(iw,ih),min(1600,iw),-2)':'if(gt(iw,ih),-2,min(1600,ih))'" -c:v libwebp -quality 80 -frames:v 1 "$2.webp" </dev/null || echo "FAIL $1"
}
A=assets
img "$A/Reference and others/Member/Huffle.jpg" media/team/huffle
img "$A/Reference and others/Member/Ice.png" media/team/ice
img "$A/Reference and others/Member/Nyan.jpg" media/team/nyan
img "$A/Reference and others/Member/P.jpg" media/team/p
img "$A/Reference and others/Member/Progess .png" media/team/roles
img "$A/Week1/w1a.jpg" media/w01/class
img "$A/Week1/huffle week1(1).jpg" media/w01/huffle
img "$A/Week1/IceWeek1(1).jpg" media/w01/ice
img "$A/Week1/NyanWeek1(1).jpg" media/w01/nyan
img "$A/Week1/PWeek1(1).jpg" media/w01/p
img "$A/Week2/Problem .png" media/w02/problem
img "$A/Week2/Goals Task Owner Timeline Risk Next step.png" media/w02/goals-board
img "$A/Week2/HuffleWeek2(1).jpg" media/w02/huffle-1
img "$A/Week2/HuffleWeek2(2).jpg" media/w02/huffle-2
img "$A/Week2/IceWeek2(1).jpg" media/w02/ice
img "$A/Week2/Nyan.HuffleWeek2(1).jpg" media/w02/nyan-huffle
img "$A/Week2/NyanWeek2(1).jpg" media/w02/nyan-1
img "$A/Week2/NyanWeek2(2).jpg" media/w02/nyan-2
img "$A/Week2/P,IceWeek2(1).jpg" media/w02/p-ice-1
img "$A/Week2/P,IceWeek2(2).jpg" media/w02/p-ice-2
img "$A/Week2/PWeek2(1).jpg" media/w02/p
img "$A/Week3/w3b.jpg" media/w03/cad
img "$A/Week3/IceWeek3(1).jpg" media/w03/ice
img "$A/Week4/IceWeek4(1).jpg" media/w04/ice-1
img "$A/Week4/IceWeek4(2).jpg" media/w04/ice-2
img "$A/Week4/Huffle,NyanWeek4(1).jpg" media/w04/huffle-nyan-1
img "$A/Week4/Huffle,NyanWeek4(2).jpg" media/w04/huffle-nyan-2
img "$A/Week4/PWeek4(1).jpg" media/w04/p
img "$A/Week5/PWeek5(1).jpg" media/w05/p
img "$A/Week5/nyanRohmweek5(1).jpg" media/w05/nyan
img "$A/week8/robot.jpg" media/w08/robot
img "$A/week8/robot green.jpg" media/w08/robot-green
img "$A/week8/w8c.jpg" media/w08/arena
img "$A/week8/armGripper.png" media/w08/arm-gripper
img "$A/week8/SufferingAndTorture.png" media/w08/tracking
img "$A/week8/1790633780933_image.png" media/w08/robot-top
i=0; for f in "$A"/Week9/*; do i=$((i+1)); img "$f" "media/w09/midterm-$i"; done
img "$A/week10/game week10.jpg" media/w10/game-design
img "$A/week10/iconGame1Gif.png" media/w10/rhythm-clash
for n in image0 image151 image2 image3 image4 image; do img "$A/week10/$n.png" "media/w10/$n"; done
ffmpeg -loglevel error -y -i "$A/week10/iconGame2Gif.gif" -vf "scale=640:-2" -c:v libwebp_anim -quality 75 -loop 0 media/w10/split-paths.webp </dev/null || echo "FAIL gif"
img "$A/Week13/Screenshot 2026-11-23 024538.png" media/w13/progress
mkdir -p media/docs media/slides
cp "$A/week8/Era-One_Progress_Report.pdf" media/docs/era-one-progress-report.pdf
cp "$A/Week12/C_3408_3423_3429_3430_3432_3436_OS.pdf" media/docs/w12-os-lab.pdf
cp "$A/Week12/C_3408_3423_3429_3430_3432_3436_WebServer.pdf" media/docs/w12-web-server-lab.pdf
for s in SyllabusWeek1:w01-syllabus SlideWeek2:w02 SlideWeek3:w03 SlideWeek4:w04 SlideWeek5:w05 SlideWeek6:w06 SlideWeek12.1:w12-part1 SlideWeek12.2:w12-part2; do
  gs -q -dNOPAUSE -dBATCH -dSAFER -sDEVICE=pdfwrite -dPDFSETTINGS=/ebook -sOutputFile="media/slides/${s#*:}.pdf" "slides/${s%%:*}.pdf" || echo "FAIL ${s%%:*}"
done
cp slides/SlideWeek7.pptx media/slides/w07.pptx
