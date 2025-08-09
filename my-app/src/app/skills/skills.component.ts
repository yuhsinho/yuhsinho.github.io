import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent implements OnInit {
  /** List of skills. */
  skills: string[] = [
    'Angular',
    'JavaScript',
    'Python',
    'Angular',
    'JavaScript',
    'Python',
  ];

  /** List of skill positions. */
  skillPositions: string[][] = [];

  /** The currently dragging index. */
  currentlyDragging: number | undefined;

  ngOnInit() {
    for (let i = 0; i < this.skills.length; i++) {
      const pos: string[] = [
        i * (90 / this.skills.length) + '%',
        ((i + 1) % 3) * 33 + '%',
        this.getRandomRotation(),
      ];
      this.skillPositions.push(pos);
    }
  }

  /**
   * Get the random rotation degree.
   * @returns the random rotation degree string.
   */
  getRandomRotation(): string {
    const randomVal = Math.random() * 30 - 15;
    return `rotate(${randomVal}deg)`;
  }

  /** Update currently dragging index when mouse is down. */
  startDragging(i: number): void {
    this.currentlyDragging = i;
  }

  /**
   * Update currently dragging skill positions when mouse is moving.
   * @param e The mouse event.
   */
  mouseMove(e: MouseEvent): void {
    if (this.currentlyDragging === undefined) {
      return;
    }

    this.skillPositions[this.currentlyDragging][0] = e.pageX - 70 + 'px';
    this.skillPositions[this.currentlyDragging][1] = e.pageY - 30 + 'px';
  }

  /** Update currentlyDragging to undefined when mouse is up. */
  stopDragging(): void {
    this.currentlyDragging = undefined;
  }
}
